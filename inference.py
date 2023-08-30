from sagemaker.huggingface import HuggingFacePredictor


def run_inference(predictor, prompt):
    # hyperparameters for llm
    payload = {
        "inputs": prompt,
        "parameters": {
            "do_sample": True,
            "top_p": 0.6,
            "temperature": 0.9,
            "top_k": 50,
            "max_new_tokens": 512,
            "repetition_penalty": 1.03,
            "stop": ["</s>"],
        },
    }

    # send request to endpoint
    response = predictor.predict(payload)

    return response[0]["generated_text"][len(prompt) :]


def main():
    # create predictor
    predictor = HuggingFacePredictor(
        "YOUR ENDPOINT NAME"
    )  # llama2-chat-endpoint-1h7s2afii09310d4d605026

    # define your prompt
    prompt = f"""<s>[INST] <<SYS>>
                You are an AWS Expert
                <</SYS>>

                What is AWS CDK used for? [/INST]
            """

    # run inference
    response = run_inference(predictor, prompt)
    print(response)


if __name__ == "__main__":
    main()
