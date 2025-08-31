import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-6">
      <Card className="max-w-md w-full shadow-premium bg-card/50 backdrop-blur-sm border-border/50">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto animate-pulse" />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase. You will be redirected to the home page shortly.
          </p>
          
          <div className="text-sm text-muted-foreground">
            Redirecting in 3 seconds...
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccess;