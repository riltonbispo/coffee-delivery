import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import expresso from "../../assets/expresso.png";
import specialCoffeDisplayHomepage from "../../assets/special-coffe-display-homepage.png";
import { CoffeeCard } from "../../components/CoffeeCard";

export function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{t("homeTitle")}</title>
          <meta name="description" content={t("homeMetaDesc")} />
          <meta
            property="og:title"
            content="Coffee Delivery - Special and Unique | eddyyxxyy"
          />
          <meta
            property="og:description"
            content="Discover Coffee Delivery, our fictitious coffee platform! Get to know our coffees and fall in love with our selection. Try buying coffee with us!"
          />
          <link rel="canonical" href="https://www.tobeimplemented.com" />
        </Helmet>
      </HelmetProvider>

      <main className="flex-grow overflow-y-auto px-6 pb-24 font-sans-r md:px-8 lg:px-16">
        <div className="mt-8 grid grid-cols-1 items-center justify-center gap-12 md:mt-16 md:grid-cols-2 md:gap-12 lg:mt-24 lg:gap-14">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <h1 className="font-sans-b text-3xl font-extrabold leading-[130%] text-base-title md:text-4xl lg:text-5xl">
              {t("homeHeading")}
            </h1>
            <p className="text-xl text-base-subtitle">{t("homeParagraph")}</p>
            <div className="mt-10 grid grid-cols-2 gap-5 text-base text-base-text">
              <span className="flex items-center justify-start gap-3 text-sm md:text-base">
                <div className="rounded-full bg-product-yellow-dark p-2">
                  <ShoppingCart
                    size={16}
                    weight="fill"
                    className="text-base-white"
                  />
                </div>
                {t("safeToBuy")}
              </span>
              <span className="flex items-center justify-start gap-3 text-sm md:text-base">
                <div className="rounded-full bg-base-text p-2">
                  <Package
                    size={16}
                    weight="fill"
                    className="text-base-white"
                  />
                </div>
                {t("safeToDeliver")}
              </span>
              <span className="flex items-center justify-start gap-3 text-sm md:text-base">
                <div className="rounded-full bg-product-yellow p-2">
                  <Timer size={16} weight="fill" className="text-base-white" />
                </div>
                {t("fastToDeliver")}
              </span>
              <span className="flex items-center justify-start gap-3 text-sm md:text-base">
                <div className="rounded-full bg-product-purple p-2">
                  <Coffee
                    size={16}
                    weight="fill"
                    className="text-base-white"
                  />
                </div>
                {t("freshWhenDelivered")}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="max-w-lg">
              <img src={specialCoffeDisplayHomepage} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-20 lg:mt-28">
          <h2 className="text-center font-sans-b text-[2rem] text-base-subtitle md:text-start">
            {t("coffeeListHeadline")}
          </h2>
          <ul className="mt-12 flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
            <li className="flex items-center justify-center">
              <CoffeeCard
                imgSrc={expresso}
                coffeeName={t("traditionalExpressoName")}
                coffeeDesc={t("traditionalExpressoDesc")}
                coffeeTag={t("traditionalTag")}
                coffeePrice={9.99}
              />
            </li>
            <li className="flex items-center justify-center">
              <CoffeeCard
                imgSrc={expresso}
                coffeeName={t("traditionalExpressoName")}
                coffeeDesc={t("traditionalExpressoDesc")}
                coffeeTag={t("traditionalTag")}
                coffeePrice={9.99}
              />
            </li>
            <li className="flex items-center justify-center">
              <CoffeeCard
                imgSrc={expresso}
                coffeeName={t("traditionalExpressoName")}
                coffeeDesc={t("traditionalExpressoDesc")}
                coffeeTag={t("traditionalTag")}
                coffeePrice={9.99}
              />
            </li>
            <li className="flex items-center justify-center">
              <CoffeeCard
                imgSrc={expresso}
                coffeeName={t("traditionalExpressoName")}
                coffeeDesc={t("traditionalExpressoDesc")}
                coffeeTag={t("traditionalTag")}
                coffeePrice={9.99}
              />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
