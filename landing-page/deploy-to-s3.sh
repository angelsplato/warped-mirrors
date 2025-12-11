#!/bin/bash

# Deploy script for AWS S3 + CloudFront
# Usage: ./deploy-to-s3.sh <bucket-name> <cloudfront-distribution-id>

set -e

BUCKET_NAME=$1
DISTRIBUTION_ID=$2

if [ -z "$BUCKET_NAME" ]; then
    echo "Error: Bucket name is required"
    echo "Usage: ./deploy-to-s3.sh <bucket-name> <cloudfront-distribution-id>"
    exit 1
fi

echo "Building the application..."
npm run build

echo "Deploying to S3 bucket: $BUCKET_NAME"
aws s3 sync dist/ s3://$BUCKET_NAME --delete --cache-control max-age=31536000,public

# Update index.html with no-cache to ensure users get the latest version
aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html --cache-control no-cache,no-store,must-revalidate --content-type text/html

echo "Deployment to S3 completed successfully!"

if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
    echo "CloudFront cache invalidation initiated!"
fi

echo "Deployment completed successfully!"
