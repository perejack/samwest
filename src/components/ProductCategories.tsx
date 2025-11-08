import { Link } from "react-router-dom";

const ProductCategories = () => {
  const categories = [
    {
      name: "FURNITURE",
      image: "https://furniturepalacekenya.com/wp-content/uploads/2022/11/PS.jpg",
      bgColor: "bg-blue-50"
    },
    {
      name: "HOUSEHOLD", 
      image: "https://c8.alamy.com/comp/WJGP6K/cleaning-products-in-a-shop-WJGP6K.jpg",
      bgColor: "bg-blue-50"
    },
    {
      name: "INDUSTRIAL",
      image: "https://www.engnetglobal.com/images/companies/mainimage/ARI022_main_010811070258mainimage.jpg",
      bgColor: "bg-red-50"
    },
    {
      name: "GARDENING",
      image: "/images/categories/gardening.jpg.webp",
      bgColor: "bg-green-50"
    },
    {
      name: "GENERAL PRODUCTS",
      image: "https://content.jdmagicbox.com/comp/mandla/e3/9999p7642.7642.180119121216.i6e3/catalogue/mj-star-kirana-stores-ghughri-mandla-general-stores-1hhbw4dt9g.jpg",
      bgColor: "bg-pink-50"
    },
    {
      name: "GROCERY STAPLES",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzz1a5uW1SyVzZ678DwgsCJyqqUTeaJ9Df1A&s",
      bgColor: "bg-orange-50"
    },
    {
      name: "FOOD & BEVERAGE PRODUCTS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDVVfw9qMI8yGiT6eb9mTzHW7guMucHb7TA&s",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category, index) => {
            const slug = category.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
            return (
              <Link
                key={index}
                to={`/category/${slug}`}
                className={`${category.bgColor} rounded-2xl p-4 text-center hover:shadow-card-hover transition-all duration-300 hover:scale-105 cursor-pointer group`}
              >
                <div className="mb-3 rounded-xl overflow-hidden bg-white aspect-square flex items-center justify-center">
                  <img src={category.image} alt={category.name} className="w-full h-full object-contain p-2" />
                </div>
                <h3 className="font-semibold text-sm text-gray-800 leading-tight">
                  {category.name}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;