
eb setenv AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY AWS_REGION=$AWS_DEFAULT_REGION AWS_BUCKET=$AWS_BUCKET PORT=$PORT DB_HOST=$HOST DEV_DB=$DEV_DB DB_PORT=$DB_PORT USER=$USER PASSWORD=$PASSWORD URL=$URL TOKEN_SECRET=$TOKEN_SECRET && eb deploy udagram-app-dev
