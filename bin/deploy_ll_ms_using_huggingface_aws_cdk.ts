#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DeployLlMsUsingHuggingfaceAwsCdkStack } from '../lib/deploy_ll_ms_using_huggingface_aws_cdk-stack';

const app = new cdk.App();
new DeployLlMsUsingHuggingfaceAwsCdkStack(app, 'DeployLlMsUsingHuggingfaceAwsCdkStack', {});