import {
  DeliveryTruck,
  Headphones,
  Package,
  ShoppingBag,
} from "@/assets/icons";

export default function Features() {
  return (
    <div className="flex items-center bg-white shadow-lg border border-gray-50 rounded-lg p-10 gap-8">
      <div className="flex items-center gap-4">
        <div>
          <DeliveryTruck />
        </div>
        <div className="w-64">
          <div>
            <p className="text-md font-600 text-gray-900">Free Shipping</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-400">
              Free shipping on all your order
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div>
          <Headphones />
        </div>
        <div className="w-64">
          <div>
            <p className="text-md font-600 text-gray-900">
              Customer Support 24/7
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-400">
              Instant access to Support
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div>
          <ShoppingBag />
        </div>
        <div className="w-64">
          <div>
            <p className="text-md font-600 text-gray-900">
              100% Secure Payment
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-400">
              We ensure your money is save
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div>
          <Package />
        </div>
        <div className="w-64">
          <div>
            <p className="text-md font-600 text-gray-900">
              Money-Back Guarantee
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400 font-400">
              30 Days Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
