export interface ProductContent {
      name: string;
      description: string;
      details: string;
      benefits: string[];
}

export interface Product {
      name: string | undefined;
      description: string;
      details: string;
      benefits: any;
      id: number;
      price: string;
      image: string;
      rating: number;
      size: string;
      coverage: string;
      en: ProductContent;
      mr: ProductContent;
}

export const products: Product[] = [
      {
            name: "KADURAKSHAK Hi-Power 80000",
            description: "Advanced Agricultural Pest Repellent",
            details: "Powerful formula to prevent insect feeding and acts as an excellent repellent.",
            benefits: [
                  "Powerful Formula – Pure concentrated bitter extract and biodegradable compounds.",
                  "Effective Protection – Prevents insect feeding and acts as an excellent repellent.",
                  "Rapid Action – Affects insect feeding ability, ensuring crop safety.",
            ],
            id: 1,
            price: "",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739091644/hqnga7sqqwby1rm7yuqv.png",
            rating: 4.8,
            size: "100ml | 250ml | 500ml | 1 ltr",
            coverage: "100 sq. meters",
            en: {
                  name: "KADURAKSHAK Hi-Power 80000",
                  description: "Advanced Agricultural Pest Repellent",
                  details: "Powerful formula to prevent insect feeding and acts as an excellent repellent.",
                  benefits: [
                        "Powerful Formula – Pure concentrated bitter extract and biodegradable compounds.",
                        "Effective Protection – Prevents insect feeding and acts as an excellent repellent.",
                        "Rapid Action – Affects insect feeding ability, ensuring crop safety.",
                  ],
            },
            mr: {
                  name: "कडुरक्षक हाय-पॉवर ८००००",
                  description: "प्रगत कृषी कीटक निवारक",
                  details: "कीटकांच्या आहारास प्रतिबंध करणारा आणि उत्कृष्ट निवारक म्हणून कार्य करणारा शक्तिशाली फॉर्म्युला.",
                  benefits: [
                        "शक्तिशाली फॉर्म्युला – शुद्ध केंद्रित कडू अर्क आणि जैवविघटनशील संयुगे.",
                        "प्रभावी संरक्षण – कीटकांच्या आहारास प्रतिबंध करते आणि उत्कृष्ट निवारक म्हणून कार्य करते.",
                        "त्वरित क्रिया – कीटकांच्या आहार क्षमतेवर परिणाम करते, पीक सुरक्षितता सुनिश्चित करते.",
                  ],
            },
      },
      {
            name: "KADURAKSHAK Hi-Power 125000",
            description: "Advanced Agricultural Pest Repellent",
            details: "Enhanced formula to prevent insect feeding and acts as an excellent repellent.",
            benefits: [
                  "Enhanced Formula – Pure concentrated bitter extract and biodegradable compounds.",
                  "Effective Protection – Prevents insect feeding and acts as an excellent repellent.",
                  "Rapid Action – Affects insect feeding ability, ensuring crop safety.",
            ],
            id: 2,
            price: "",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739093762/Untitled_design_1_xnipjk.png",
            rating: 4.9,
            size: "100ml | 250ml | 500ml | 1 ltr",
            coverage: "100 sq. meters",
            en: {
                  name: "KADURAKSHAK Hi-Power 125000",
                  description: "Advanced Agricultural Pest Repellent",
                  details: "Enhanced formula to prevent insect feeding and acts as an excellent repellent.",
                  benefits: [
                        "Enhanced Formula – Pure concentrated bitter extract and biodegradable compounds.",
                        "Effective Protection – Prevents insect feeding and acts as an excellent repellent.",
                        "Rapid Action – Affects insect feeding ability, ensuring crop safety.",
                  ],
            },
            mr: {
                  name: "कडुरक्षक हाय-पॉवर १२५०००",
                  description: "प्रगत कृषी कीटक निवारक",
                  details: "कीटकांच्या आहारास प्रतिबंध करणारा आणि उत्कृष्ट निवारक म्हणून कार्य करणारा सुधारित फॉर्म्युला.",
                  benefits: [
                        "सुधारित फॉर्म्युला – शुद्ध केंद्रित कडू अर्क आणि जैवविघटनशील संयुगे.",
                        "प्रभावी संरक्षण – कीटकांच्या आहारास प्रतिबंध करते आणि उत्कृष्ट निवारक म्हणून कार्य करते.",
                        "त्वरित क्रिया – कीटकांच्या आहार क्षमतेवर परिणाम करते, पीक सुरक्षितता सुनिश्चित करते.",
                  ],
            },
      },
      {
            name: "RAIN MASTER",
            description: "Advanced Rainwater Harvesting Solution",
            details: "Innovative system to efficiently collect and store rainwater for agricultural use.",
            benefits: [
                  "Efficient Collection – Maximizes rainwater capture with minimal loss.",
                  "Durable Storage – High-quality materials ensure long-lasting storage solutions.",
                  "Cost-Effective – Reduces dependency on external water sources, saving costs.",
            ],
            id: 3,
            price: "",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739091643/neexy3hywdsnk6kmfd9f.png",
            rating: 4.9,
            size: "500L | 1000L | 2000L",
            coverage: "Varies based on system size",
            en: {
                  name: "RAIN MASTER",
                  description: "Advanced Rainwater Harvesting Solution",
                  details: "Innovative system to efficiently collect and store rainwater for agricultural use.",
                  benefits: [
                        "Efficient Collection – Maximizes rainwater capture with minimal loss.",
                        "Durable Storage – High-quality materials ensure long-lasting storage solutions.",
                        "Cost-Effective – Reduces dependency on external water sources, saving costs.",
                  ],
            },
            mr: {
                  name: "रेन मास्टर",
                  description: "प्रगत पावसाचे पाणी संकलन उपाय",
                  details: "कृषी वापरासाठी पावसाचे पाणी कार्यक्षमतेने संकलित आणि साठवण्यासाठी अभिनव प्रणाली.",
                  benefits: [
                        "कार्यक्षम संकलन – कमी नुकसानासह पावसाचे पाणी संकलन वाढवते.",
                        "टिकाऊ साठवण – उच्च-गुणवत्तेची सामग्री दीर्घकाळ टिकणारी साठवण उपाय सुनिश्चित करते.",
                        "खर्च-प्रभावी – बाह्य जलस्रोतांवर अवलंबित्व कमी करते, खर्च वाचवते.",
                  ],
            },
      },
      {
            name: "NUTRIFUZE",
            description: "Advanced Nutrient Solution",
            details: "Innovative formula to provide essential nutrients for optimal plant growth.",
            benefits: [
                  "Balanced Nutrition – Provides essential nutrients for healthy plant growth.",
                  "Enhanced Growth – Promotes vigorous growth and higher yields.",
                  "Easy Application – Simple to use and apply to crops.",
            ],
            id: 4,
            price: "",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739091643/ph9vwwawtc1fjnu2ba41.png",
            rating: 4.9,
            size: "1L | 5L | 10L",
            coverage: "Varies based on application",
            en: {
                  name: "NUTRIFUZE",
                  description: "Advanced Nutrient Solution",
                  details: "Innovative formula to provide essential nutrients for optimal plant growth.",
                  benefits: [
                        "Balanced Nutrition – Provides essential nutrients for healthy plant growth.",
                        "Enhanced Growth – Promotes vigorous growth and higher yields.",
                        "Easy Application – Simple to use and apply to crops.",
                  ],
            },
            mr: {
                  name: "न्यूट्रिफ्यूज",
                  description: "प्रगत पोषक तत्व उपाय",
                  details: "सर्वोत्तम वनस्पती वाढीसाठी आवश्यक पोषक तत्व प्रदान करणारा अभिनव फॉर्म्युला.",
                  benefits: [
                        "संतुलित पोषण – निरोगी वनस्पती वाढीसाठी आवश्यक पोषक तत्व प्रदान करते.",
                        "वाढीव वाढ – जोरदार वाढ आणि उच्च उत्पन्नास प्रोत्साहन देते.",
                        "सोपे अनुप्रयोग – पिकांवर वापरण्यास आणि लागू करण्यास सोपे.",
                  ],
            },
      },
      {
            name: "SUPER 700 AB",
            description: "Advanced Bio-Stimulant",
            details: "Innovative bio-stimulant to enhance plant growth and resilience.",
            benefits: [
                  "Enhanced Growth – Promotes vigorous plant growth and development.",
                  "Increased Resilience – Improves plant resistance to stress and diseases.",
                  "Eco-Friendly – Made from natural and biodegradable ingredients.",
            ],
            id: 5,
            price: "",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739091643/thhgp5ibpdeqbowonyzh.png",
            rating: 4.7,
            size: "250ml | 500ml | 1L",
            coverage: "Varies based on application",
            en: {
                  name: "SUPER 700 AB",
                  description: "Advanced Bio-Stimulant",
                  details: "Innovative bio-stimulant to enhance plant growth and resilience.",
                  benefits: [
                        "Enhanced Growth – Promotes vigorous plant growth and development.",
                        "Increased Resilience – Improves plant resistance to stress and diseases.",
                        "Eco-Friendly – Made from natural and biodegradable ingredients.",
                  ],
            },
            mr: {
                  name: "सुपर ७०० एबी",
                  description: "प्रगत जैव-उत्तेजक",
                  details: "वनस्पती वाढ आणि लवचिकता वाढवण्यासाठी अभिनव जैव-उत्तेजक.",
                  benefits: [
                        "वाढीव वाढ – जोरदार वनस्पती वाढ आणि विकासास प्रोत्साहन देते.",
                        "वाढीव लवचिकता – ताण आणि रोगांपासून वनस्पती प्रतिकारशक्ती सुधारते.",
                        "पर्यावरणास अनुकूल – नैसर्गिक आणि जैवविघटनशील घटकांपासून बनवलेले.",
                  ],
            },
      },

      {
            name: "K-UPTAKE BOOSTER",
            description: "Advanced Potassium Uptake Enhancer",
            details: "Innovative solution to enhance potassium uptake in plants for better growth and yield.",
            benefits: [
                  "Improved Uptake – Enhances potassium absorption in plants.",
                  "Better Growth – Promotes healthier and stronger plant growth.",
                  "Higher Yield – Increases crop yield and quality.",
            ],
            id: 6,
            price: "",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739091643/ombgtd7vkni7wmlnxbx8.png",
            rating: 4.8,
            size: "1L | 5L | 10L",
            coverage: "Varies based on application",
            en: {
                  name: "K-UPTAKE BOOSTER",
                  description: "Advanced Potassium Uptake Enhancer",
                  details: "Innovative solution to enhance potassium uptake in plants for better growth and yield.",
                  benefits: [
                        "Improved Uptake – Enhances potassium absorption in plants.",
                        "Better Growth – Promotes healthier and stronger plant growth.",
                        "Higher Yield – Increases crop yield and quality.",
                  ],
            },
            mr: {
                  name: "के-अपटेक बूस्टर",
                  description: "प्रगत पोटॅशियम शोषण वाढवणारा उपाय",
                  details: "वनस्पतींमध्ये पोटॅशियम शोषण वाढवण्यासाठी अभिनव उपाय, चांगल्या वाढीसाठी आणि उत्पादनासाठी.",
                  benefits: [
                        "वाढीव शोषण – वनस्पतींमध्ये पोटॅशियम शोषण वाढवते.",
                        "चांगली वाढ – निरोगी आणि मजबूत वनस्पती वाढीस प्रोत्साहन देते.",
                        "उच्च उत्पादन – पीक उत्पादन आणि गुणवत्ता वाढवते.",
                  ],
            },
      },

      {
            name: "PERU-SAMRAT",
            description: "Advanced Guava Growth Enhancer",
            details: "Innovative solution to promote healthy and vigorous growth of guava plants.",
            benefits: [
                  "Enhanced Growth – Promotes healthy and vigorous growth of guava plants.",
                  "Improved Yield – Increases the yield and quality of guava fruits.",
                  "Easy Application – Simple to use and apply to guava plants.",
            ],
            id: 7,
            price: "",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739091643/et2hpkcjwsowwt8hw2d3.png",
            rating: 4.9,
            size: "1L | 5L | 10L",
            coverage: "Varies based on application",
            en: {
                  name: "PERU SAMRAT",
                  description: "Advanced Guava Growth Enhancer",
                  details: "Innovative solution to promote healthy and vigorous growth of guava plants.",
                  benefits: [
                        "Enhanced Growth – Promotes healthy and vigorous growth of guava plants.",
                        "Improved Yield – Increases the yield and quality of guava fruits.",
                        "Easy Application – Simple to use and apply to guava plants.",
                  ],
            },
            mr: {
                  name: "पेरू सम्राट",
                  description: "प्रगत पेरू वाढवणारा उपाय",
                  details: "पेरूच्या वनस्पतींच्या निरोगी आणि जोरदार वाढीस प्रोत्साहन देणारा अभिनव उपाय.",
                  benefits: [
                        "वाढीव वाढ – पेरूच्या वनस्पतींच्या निरोगी आणि जोरदार वाढीस प्रोत्साहन देते.",
                        "उत्तम उत्पादन – पेरूच्या फळांचे उत्पादन आणि गुणवत्ता वाढवते.",
                        "सोपे अनुप्रयोग – पेरूच्या वनस्पतींवर वापरण्यास आणि लागू करण्यास सोपे.",
                  ],
            },
      },
      {
            name: "HUMI-PRIME",
            description: "Advanced Soil Humectant",
            details: "Innovative solution to improve soil moisture retention and enhance plant growth.",
            benefits: [
                  "Improved Moisture Retention – Enhances soil's ability to retain moisture.",
                  "Better Growth – Promotes healthier and stronger plant growth.",
                  "Eco-Friendly – Made from natural and biodegradable ingredients.",
            ],
            id: 8,
            price: "",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739091643/rrzpxxyjpkmhdphh9bav.png",
            rating: 4.8,
            size: "1L | 5L | 10L",
            coverage: "Varies based on application",
            en: {
                  name: "HUMI-PRIME",
                  description: "Advanced Soil Humectant",
                  details: "Innovative solution to improve soil moisture retention and enhance plant growth.",
                  benefits: [
                        "Improved Moisture Retention – Enhances soil's ability to retain moisture.",
                        "Better Growth – Promotes healthier and stronger plant growth.",
                        "Eco-Friendly – Made from natural and biodegradable ingredients.",
                  ],
            },
            mr: {
                  name: "हुमी-प्राइम",
                  description: "प्रगत माती ह्युमेक्टंट",
                  details: "मातीतील आर्द्रता धारणा सुधारण्यासाठी आणि वनस्पती वाढ वाढवण्यासाठी अभिनव उपाय.",
                  benefits: [
                        "वाढीव आर्द्रता धारणा – मातीची आर्द्रता धारणा क्षमता वाढवते.",
                        "चांगली वाढ – निरोगी आणि मजबूत वनस्पती वाढीस प्रोत्साहन देते.",
                        "पर्यावरणास अनुकूल – नैसर्गिक आणि जैवविघटनशील घटकांपासून बनवलेले.",
                  ],
            },
      },
      {
            name: "ROOT LONGSTER",
            description: "Advanced Root Growth Enhancer",
            details: "Innovative solution to promote deep and strong root growth for plants.",
            benefits: [
                  "Enhanced Root Growth – Promotes deep and strong root development.",
                  "Better Nutrient Uptake – Improves the plant's ability to absorb nutrients.",
                  "Increased Stability – Provides better anchorage and stability for plants.",
            ],
            id: 9,
            price: "",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039525/rootlongster_iiq024.png",
            rating: 4.8,
            size: "1L | 5L | 10L",
            coverage: "Varies based on application",
            en: {
                  name: "ROOT LONGSTER",
                  description: "Advanced Root Growth Enhancer",
                  details: "Innovative solution to promote deep and strong root growth for plants.",
                  benefits: [
                        "Enhanced Root Growth – Promotes deep and strong root development.",
                        "Better Nutrient Uptake – Improves the plant's ability to absorb nutrients.",
                        "Increased Stability – Provides better anchorage and stability for plants.",
                  ],
            },
            mr: {
                  name: "रूट लॉन्गस्टर",
                  description: "प्रगत मुळांची वाढ वाढवणारा उपाय",
                  details: "वनस्पतींच्या खोल आणि मजबूत मुळांच्या वाढीस प्रोत्साहन देणारा अभिनव उपाय.",
                  benefits: [
                        "वाढीव मुळांची वाढ – खोल आणि मजबूत मुळांच्या विकासास प्रोत्साहन देते.",
                        "चांगले पोषक तत्व शोषण – वनस्पतींच्या पोषक तत्व शोषण क्षमतेत सुधारणा करते.",
                        "वाढीव स्थिरता – वनस्पतींसाठी चांगले अँकरिंग आणि स्थिरता प्रदान करते.",
                  ],
            },
      },
      {
            name: "PROTOPLANT",
            description: "Advanced Plant Growth Regulator",
            details: "Innovative solution to regulate and enhance overall plant growth and development.",
            benefits: [
                  "Balanced Growth – Ensures balanced and optimal plant growth.",
                  "Improved Yield – Increases the yield and quality of crops.",
                  "Stress Resistance – Enhances plant resistance to environmental stress.",
            ],
            id: 10,
            price: "",
            image: "https://res.cloudinary.com/dh5trkmtb/image/upload/v1739039525/protoplant_s3ag5s.png",
            rating: 4.9,
            size: "1L | 5L | 10L",
            coverage: "Varies based on application",
            en: {
                  name: "PROTOPLANT",
                  description: "Advanced Plant Growth Regulator",
                  details: "Innovative solution to regulate and enhance overall plant growth and development.",
                  benefits: [
                        "Balanced Growth – Ensures balanced and optimal plant growth.",
                        "Improved Yield – Increases the yield and quality of crops.",
                        "Stress Resistance – Enhances plant resistance to environmental stress.",
                  ],
            },
            mr: {
                  name: "प्रोटोप्लांट",
                  description: "प्रगत वनस्पती वाढ नियामक",
                  details: "संपूर्ण वनस्पती वाढ आणि विकास नियंत्रित आणि वाढवण्यासाठी अभिनव उपाय.",
                  benefits: [
                        "संतुलित वाढ – संतुलित आणि सर्वोत्तम वनस्पती वाढ सुनिश्चित करते.",
                        "उत्तम उत्पादन – पिकांचे उत्पादन आणि गुणवत्ता वाढवते.",
                        "ताण प्रतिकार – पर्यावरणीय ताणांपासून वनस्पती प्रतिकारशक्ती वाढवते.",
                  ],
            },
      },
];
