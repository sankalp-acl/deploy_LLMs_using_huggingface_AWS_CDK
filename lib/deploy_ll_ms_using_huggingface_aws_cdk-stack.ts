import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { HuggingFaceLlm } from 'aws-sagemaker-huggingface-llm';

export class DeployLlMsUsingHuggingfaceAwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create an LLM sagemaker endpoint
    new HuggingFaceLlm(this, 'Llama2Llm', {
      name: 'llama2-chat',
      instanceType: 'ml.g5.2xlarge',
      environmentVariables: {
        HF_MODEL_ID: 'NousResearch/llama2-7b-chat-hf',
        SM_NUM_GPUS: '1',
        MAX_INPUT_LENGTH: '2048',
        MAX_TOTAL_TOKENS: '4096',
        MAX_BATCH_TOTAL_TOKENS: '8192',
      },
    })
  }
}
