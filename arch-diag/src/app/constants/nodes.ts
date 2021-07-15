import { Inode } from "../interfaces/node.model";

export const nodes: Inode[] = [
    {
      id: 'first',
      label: 'AwsS3LogbucketComponent',
      meta: {
        "inbound": [{
          id: 'second',
          label: 'AwsCloudtrailComponent',
          data: {largeImage:false}
        }],
        "outbound": [{
          id: 'fourth',
          label: 'AwsS3BucketComponent',
          data: {largeImage:false}
        }]
      },
      data: {largeImage:false}
    },
    {
      id: 'second',
      label: 'AwsCloudtrailComponent',
      data: {largeImage:false}
    },
    {
      id: 'third',
      label: 'AwsCloudwatchComponent',
      data: {largeImage:false}
    },
    {
      id: 'fourth',
      label: 'AwsS3BucketComponent',
      data: {largeImage:false}
    },
    {
      id: 'fifth',
      label: 'AwsS3BucketComponent',
      data: {largeImage:false}
    }
  ];