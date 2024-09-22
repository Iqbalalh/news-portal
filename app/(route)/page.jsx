"use client";
import NewsCarousel from "../components/NewsCarousel";
import BreakingNews from "../components/BreakingNews";
import NavBar from "../components/NavBar";
import NewsHeader from "../components/NewsHeader";
import NewsCardText from "../components/NewsCardText";
import CustomFooter from "../components/CustomFooter";
import SocialMediaContainer from "../components/SocialMediaContainer";
import ContentNewsCard from "../components/ContentNewsCard";
import { useEffect, useState } from "react";
import { API_NEWS_CATEGORY, API_NEWS_HEADLINE } from "../utils/endpoint";
import axios from "axios";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [sportNews, setSportNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [healthNews, setHealthNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [scienceNews, setScienceNews] = useState([]);

  const fetchData = async (api, setData) => {
    try {
      const response = await axios.get(api);
      setData(response.data.articles);
    } catch (error) {
      console.error("Failed to fetch data");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData(API_NEWS_HEADLINE(6), setNews);
    fetchData(API_NEWS_CATEGORY("sports", 6), setSportNews);
    fetchData(API_NEWS_CATEGORY("business", 6), setBusinessNews);
    fetchData(API_NEWS_CATEGORY("health", 6), setHealthNews);
    fetchData(API_NEWS_CATEGORY("technology", 6), setTechNews);
    fetchData(API_NEWS_CATEGORY("science", 6), setScienceNews);
    setIsLoading(false);
  }, []);

  return (
    <div
      className="lg:flex lg:flex-col items-center justify-center"
      style={{ overflowX: "hidden" }}
    >
      <div className="header lg:w-full lg:fixed top-0 z-50 bg-white justify-center">
        <NavBar props={news} />
      </div>
      <div className="hl-row lg:w-10/12 lg:mt-40 grid md:grid-cols-2 lg:grid-cols-3 mb-4">
        <div className="lg:col-span-2 md:col-span-1">
          <NewsCarousel props={news} />
        </div>
        <div className="lg:w-full lg:col-span-1 md:col-span-1">
          <div className="grid grid-cols-1 md:grid-rows-4 gap-8">
            {news?.slice(0, 5).map((item, index) => (
              <div className="sm:col-span-1 px-4 lg:px-0" key={item.source.id}>
                <BreakingNews
                  props={news[index]}
                  id={item.source.id}
                  image={item.urlToImage}
                  title={item.title}
                  category={item.category}
                  date={item.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hl-row lg:w-10/12 grid sm:grid-cols-2 sm:max-w-full lg:grid-cols-4 lg:mt-16 mt-8">
        <div className="lg:col-span-3 sm:col-span-1">
          <NewsHeader
            tagline="OLAHRAGA"
            category="sports"
            className="lg:grid lg:grid-cols-2 grid-cols-1"
            color="blue-900"
          >
            {(linkRef) => (
              <div className="lg:flex lg:flex-row block">
                <div className="lg:w-2/3">
                  <NewsCarousel props={sportNews} />
                </div>
                <div className="lg:w-1/3">
                  <div className="grid grid-cols-1 gap-8 lg:gap-12">
                    {sportNews.slice(0, 5).map((item, index) => (
                      <div
                        className="lg:col-span-1 px-4 lg:px-0"
                        key={item.source.id}
                      >
                        <NewsCardText
                          props={sportNews[index]}
                          id={item.source.id}
                          title={item.title}
                          date={item.publishedAt}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </NewsHeader>
        </div>
        <div className="lg:col-span-1 sm:mt-8 lg:mt-0 md:mt-8 md:col-span-1 ml-5 hidden md:block lg:block">
          <SocialMediaContainer
            title="Instagram @polresta_bandarlampung"
            src="https://widget.taggbox.com/148528"
            textColor="#DD2A7B"
          />
        </div>
      </div>

      <div className="hl-row lg:w-10/12 grid sm:grid-cols-1 sm:max-w-screen lg:grid-cols-4 mt-8 lg:mt-16">
        <div className="lg:col-span-3 sm:col-span-1">
          <NewsHeader
            props={businessNews}
            tagline="BISNIS"
            category="business"
            className="lg:grid lg:col-span-2"
            color="yellow-400"
          >
            {(linkRef) => (
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 gap-4">
                {businessNews?.slice(0, 10).map((item, index) => (
                  <div key={item.source.id} className="sm:col-span-1 gap-4">
                    <ContentNewsCard
                      props={businessNews[index]}
                      id={item.source.id}
                      image={item.urlToImage}
                      title={item.title}
                      date={item.publishedAt}
                    />
                  </div>
                ))}
              </div>
            )}
          </NewsHeader>
        </div>
        <div className="lg:col-span-1 sm:mt-8 lg:mt-0 md:mt-8 md:col-span-1 ml-5 hidden md:block lg:block">
          <SocialMediaContainer
            title="Youtube"
            src="https://widget.taggbox.com/148533"
            textColor="#FF0000"
          />
        </div>
      </div>

      <div className="hl-row lg:w-10/12 grid sm:grid-cols-2 sm:max-w-full lg:grid-cols-4 lg:mt-16 mt-8">
        <div className="lg:col-span-2 sm:col-span-1">
          <NewsHeader
            props={techNews}
            tagline="TEKNOLOGI"
            category="technology"
            className="lg:grid lg:col-span-2"
            color="blue-900"
          >
            {(linkRef) => (
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 gap-4">
                {techNews?.slice(0, 8).map((item, index) => (
                  <div key={item.source.id} className="sm:col-span-1 gap-4">
                    <ContentNewsCard
                      props={techNews[index]}
                      id={item.source.id}
                      image={item.urlToImage}
                      title={item.title}
                      date={item.publishedAt}
                    />
                  </div>
                ))}
              </div>
            )}
          </NewsHeader>
        </div>
        <div className="lg:col-span-2 sm:col-span-1 lg:ml-5 mt-12 lg:mt-0">
          <NewsHeader
            props={healthNews}
            tagline="KESEHATAN"
            category="health"
            className="lg:grid lg:grid-cols-2 grid-cols-1"
            color="green-700"
          >
            {(linkRef) => (
              <div className="lg:flex lg:flex-row block">
                <div className="lg:w-2/3">
                  <NewsCarousel news={healthNews} />
                </div>
                <div className="lg:w-1/3">
                  <div className="grid grid-cols-1 gap-8">
                    {healthNews.slice(0, 5).map((item, index) => (
                      <div
                        className="lg:col-span-1 px-4 lg:px-0"
                        key={item.source.id}
                      >
                        <NewsCardText
                          props={healthNews[index]}
                          id={item.source.id}
                          title={item.title}
                          date={item.publishedAt}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </NewsHeader>
        </div>
      </div>

      <div className="hl-row lg:w-10/12 grid sm:grid-cols-1 sm:max-w-screen lg:grid-cols-4 mt-8 lg:mt-16">
        <div className="lg:col-span-3 sm:col-span-1">
          <NewsHeader
            props={scienceNews}
            tagline="SAINS"
            category="science"
            className="lg:grid lg:col-span-2"
            color="black"
          >
            {(linkRef) => (
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 gap-4">
                {scienceNews.slice(0, 10).map((item, index) => (
                  <div key={item.source.id} className="sm:col-span-1 gap-4">
                    <ContentNewsCard
                      props={scienceNews[index]}
                      id={item.source.id}
                      image={item.urlToImage}
                      title={item.title}
                      date={item.publishedAt}
                    />
                  </div>
                ))}
              </div>
            )}
          </NewsHeader>
        </div>
        <div className="lg:col-span-1 sm:mt-8 lg:mt-0 md:mt-8 md:col-span-1 ml-5 hidden md:block lg:block">
          <SocialMediaContainer
            title="Twitter @PolrestaL"
            src="https://widget.taggbox.com/148558"
            textColor="#1DA1F2"
          />
        </div>
      </div>

      <div className="footer lg:w-full mt-16 md:mt-20 lg:mt-24">
        <CustomFooter />
      </div>
    </div>
  );
};

export default HomePage;
