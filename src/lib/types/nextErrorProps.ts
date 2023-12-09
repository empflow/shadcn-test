type NextErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default NextErrorProps;
