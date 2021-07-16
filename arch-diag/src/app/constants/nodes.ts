import { Inode } from "../interfaces/node.model";

export const nodes: Inode[] = [
    {
      id: 'first',
      label: 'S3Logbucket',
      component: 'AwsS3LogbucketComponent',
      meta: {
        "inbound": [{
          id: 'second',
          label: 'Cloudtrail',
          component: 'AwsCloudtrailComponent',
          data: {largeImage:false}
        }],
        "outbound": [{
          id: 'fourth',
          label: 'S3Bucket',
          component: 'AwsS3BucketComponent',
          data: {largeImage:false}
        }]
      },
      data: {largeImage:false}
    },
    {
      id: 'second',
      label: 'Cloudtrail',
      component: 'AwsCloudtrailComponent',
      data: {largeImage:false}
    },
    {
      id: 'third',
      label: 'Cloudwatch',
      component: 'AwsCloudwatchComponent',
      data: {largeImage:false}
    },
    {
      id: 'fourth',
      label: 'S3Bucket',
      component: 'AwsS3BucketComponent',
      data: {largeImage:false}
    },
    {
      id: 'fifth',
      label: 'S3Bucket',
      component: 'AwsS3BucketComponent',
      data: {largeImage:false}
    }
  ];