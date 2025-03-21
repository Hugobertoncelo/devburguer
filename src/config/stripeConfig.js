import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  'pk_test_51QWzArCpXwN5VaoW8k7Lo2gABx676HxlVoCcqSMl9yDLjD1EICE53oL5EwSljtK5oA6caXHsHAblPSyDfGd3ebQd00xAMnzM8j'
)

export default stripePromise;
