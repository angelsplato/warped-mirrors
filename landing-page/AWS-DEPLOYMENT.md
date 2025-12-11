# AWS Deployment Guide for Warped Mirrors Landing Page

This guide covers multiple deployment options for deploying the Warped Mirrors landing page to AWS.

## Prerequisites

- AWS Account
- AWS CLI installed and configured
- Node.js and npm installed
- Git repository (for automated deployments)

## Deployment Options

### Option 1: AWS Amplify (Recommended for Simple Deployments)

AWS Amplify is the easiest way to deploy and host your static website.

#### Steps:

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Deploy via Amplify Console:**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your Git repository
   - Amplify will auto-detect the `amplify.yml` configuration
   - Click "Save and deploy"

3. **Configuration:**
   The `amplify.yml` file is already configured with:
   - Build commands
   - Output directory (dist)
   - Cache settings

4. **Custom Domain (Optional):**
   - Go to "Domain management" in Amplify console
   - Add your custom domain
   - Amplify will automatically configure SSL

#### Amplify CLI Method:

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure Amplify
amplify configure

# Initialize Amplify in your project
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

---

### Option 2: S3 + CloudFront (Production-Grade)

For more control and better performance with custom configurations.

#### Quick Deploy with CloudFormation:

1. **Deploy Infrastructure:**
```bash
aws cloudformation create-stack \
  --stack-name warped-mirrors-website \
  --template-body file://cloudformation-template.yml \
  --parameters ParameterKey=DomainName,ParameterValue=yourdomain.com
```

2. **Get Stack Outputs:**
```bash
aws cloudformation describe-stacks \
  --stack-name warped-mirrors-website \
  --query 'Stacks[0].Outputs'
```

3. **Deploy Website:**
```bash
# Make deploy script executable
chmod +x deploy-to-s3.sh

# Deploy (use bucket name and distribution ID from stack outputs)
./deploy-to-s3.sh <bucket-name> <distribution-id>
```

#### Manual S3 + CloudFront Setup:

1. **Create S3 Bucket:**
```bash
aws s3 mb s3://your-bucket-name
aws s3 website s3://your-bucket-name --index-document index.html --error-document index.html
```

2. **Build and Upload:**
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
```

3. **Create CloudFront Distribution:**
   - Go to CloudFront console
   - Create distribution with S3 bucket as origin
   - Set default root object to `index.html`
   - Configure custom error pages (404 → 200 → /index.html)

4. **Configure Bucket Policy:**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

---

### Option 3: AWS CodePipeline + CodeBuild

For automated CI/CD deployments.

#### Steps:

1. **Create CodeBuild Project:**
   - Use the included `buildspec.yml`
   - Source: Your Git repository
   - Environment: Standard Linux image with Node.js

2. **Create CodePipeline:**
   - Source: Your Git repository
   - Build: CodeBuild project created above
   - Deploy: S3 bucket or Amplify

3. **Automated Deployment:**
   - Every push to your repository triggers automatic deployment

---

## Environment Variables

If you need environment variables, create a `.env.production` file:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_APP_NAME=Warped Mirrors
```

These will be available as `import.meta.env.VITE_*` in your code.

---

## Post-Deployment Tasks

### 1. Configure Custom Domain

**For Amplify:**
- Use Amplify Console domain management

**For CloudFront:**
```bash
# Add alternate domain name (CNAME) in CloudFront
# Request/import SSL certificate in ACM
# Update DNS records to point to CloudFront distribution
```

### 2. Enable HTTPS

- Amplify: Automatic
- CloudFront: Use AWS Certificate Manager (ACM)

### 3. Set Up Monitoring

```bash
# Enable CloudWatch for CloudFront
aws cloudfront update-distribution \
  --id <distribution-id> \
  --distribution-config file://distribution-config.json
```

---

## Performance Optimization

### Cache Headers

The deploy script automatically sets:
- Assets: `max-age=31536000` (1 year)
- index.html: `no-cache, no-store, must-revalidate`

### Compression

- CloudFront: Automatically enabled in template
- Amplify: Enabled by default

---

## Useful Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to S3 (using deploy script)
./deploy-to-s3.sh <bucket-name> <distribution-id>

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id <distribution-id> \
  --paths "/*"

# Check build size
npm run build && du -sh dist/

# List S3 bucket contents
aws s3 ls s3://your-bucket-name --recursive

# Sync only changed files
aws s3 sync dist/ s3://your-bucket-name
```

---

## Cost Estimation

### AWS Amplify
- Hosting: Free tier includes 15 GB served/month
- After: $0.15/GB served
- Build minutes: 1000 free/month, then $0.01/minute

### S3 + CloudFront
- S3: ~$0.023/GB stored + $0.09/GB transferred
- CloudFront: First 1 TB/month: $0.085/GB
- Route53 (if used): $0.50/hosted zone/month

### Estimated Monthly Cost
- Low traffic (< 100GB): $5-15/month
- Medium traffic (100-500GB): $15-50/month

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 Errors on Refresh
- Ensure `_redirects` file is in `public/` folder
- CloudFront: Configure custom error responses

### Slow Deployments
- Use CloudFront invalidation instead of waiting for cache expiry
- Enable incremental builds in Amplify

### Assets Not Loading
- Check CORS configuration in S3
- Verify CloudFront origin settings

---

## Security Best Practices

1. **Use CloudFront with S3:**
   - Don't expose S3 bucket directly
   - Use Origin Access Identity (OAI)

2. **Enable WAF (Optional):**
   ```bash
   # Attach WAF to CloudFront distribution
   aws wafv2 associate-web-acl \
     --web-acl-arn <waf-acl-arn> \
     --resource-arn <cloudfront-arn>
   ```

3. **Set Security Headers:**
   - Use CloudFront Functions or Lambda@Edge
   - Add headers: CSP, X-Frame-Options, etc.

---

## Rollback Strategy

### Amplify
- Go to Amplify Console → Deployments
- Click "Redeploy" on a previous version

### S3 + CloudFront
```bash
# Enable versioning on S3 bucket
aws s3api put-bucket-versioning \
  --bucket your-bucket-name \
  --versioning-configuration Status=Enabled

# Restore previous version if needed
aws s3api list-object-versions --bucket your-bucket-name
```

---

## Support

For issues or questions:
- AWS Documentation: https://docs.aws.amazon.com/
- AWS Support: https://console.aws.amazon.com/support/

---

## Quick Start Summary

**Fastest way to deploy:**
```bash
# 1. Install AWS CLI and configure credentials
aws configure

# 2. Deploy with Amplify CLI
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

**Production deployment:**
```bash
# 1. Deploy infrastructure
aws cloudformation create-stack \
  --stack-name warped-mirrors \
  --template-body file://cloudformation-template.yml

# 2. Deploy website
chmod +x deploy-to-s3.sh
./deploy-to-s3.sh <bucket-name> <distribution-id>
```

Your website will be live at the provided CloudFront URL!
