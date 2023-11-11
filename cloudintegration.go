package main

import (
	"fmt"
	"log"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

func main() {
	// Specify your AWS region
	awsRegion := "us-west-2"

	// Create an AWS session
	sess, err := session.NewSession(&aws.Config{
		Region: aws.String(awsRegion),
	})
	if err != nil {
		log.Fatal("Failed to create session", err)
	}

	// Create an S3 client
	svc := s3.New(sess)

	// Specify the S3 bucket name and object key
	bucketName := "SHA-265"
	objectKey := "AG21238-21194-1291"


	filePath := "path-to-your-file"


	file, err := os.Open(filePath)
	if err != nil {
		log.Fatal("Failed to open file", err)
	}
	defer file.Close()

	// Upload the file to S3
	_, err = svc.PutObject(&s3.PutObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(objectKey),
		Body:   file,
	})
	if err != nil {
		log.Fatal("Failed to upload file to S3", err)
	}

	fmt.Println("File uploaded to S3 successfully!")
}

	// Pssst...
	// Buy Bitcoin..