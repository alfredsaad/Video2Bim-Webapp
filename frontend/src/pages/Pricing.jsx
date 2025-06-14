import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SlideInOnScroll from "../components/ui/SlideOnScroll"

function PricingCard({ title, price, features, popular }) {
  return (
    <div className="border rounded-lg p-6 shadow-md flex flex-col transition-all duration-500 transform hover:shadow-xl hover:border-blue-950 hover:scale-105 hover:h-[105%]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {popular && <Badge className="bg-blue-950 text-white">Popular</Badge>}
      </div>
      <p className="text-3xl font-bold mb-6">${price}/mo</p>
      <ul className="mb-6 space-y-2 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-700">
            {feature}
          </li>
        ))}
      </ul>
      <Button className="mt-auto bg-blue-950 hover:bg-blue-800 hover:cursor-pointer">Select Plan</Button>
    </div>
  );
}

function PricingPage() {
  const plans = [
    {
      title: "Free trial",
      price: "0",
      features: ["Feature A", "Feature B", "Feature C"],
      popular: false,
    },
    {
      title: "Base Plan",
      price: "30",
      features: ["Feature A", "Feature B", "Feature C", "Feature D"],
      popular: true,
    },
    {
      title: "Pro Trial",
      price: "100",
      features: ["All features included", "Priority support"],
      popular: false,
    },
  ];

  return (
    
    <div>
        <SlideInOnScroll delay={0.2}>
        <div className="bg-white py-8 text-center ">
            <h1 className="text-5xl text-blue-950 py-5">Choose a Plan that's right for you!</h1>
            <p className="text-2xl text-gray-500">No credit card required to start</p>
        </div>
        </SlideInOnScroll>

        <SlideInOnScroll delay={0.4}>

        <div className="max-w-5xl min-w-lg mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((plan) => (
                <PricingCard key={plan.title} {...plan} />
            ))}
        </div>
        </SlideInOnScroll>

    </div>

    
  );
}
export default PricingPage;
