import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import './page.css';
import graph1 from './img/graph1.png';
import graph2 from './img/graph2.png';
import graph3 from './img/graph3.png';
import graph4 from './img/graph4.png';
import graph5 from './img/graph5.png';
import graph6 from './img/graph6.png';
import graph7 from './img/graph7.png';
import graph8 from './img/graph8.png';
import graph9 from './img/graph9.png';
import graph10 from './img/graph10.png';

const items = [
    {
      image: graph1,
      title: 'Average screen time',
      description: 'According to recent surveys, it has been found that the majority of individuals are spending a significant amount of time on social media platforms. Out of the surveyed population, 38 individuals reported using social media for 4-6 hours daily, indicating a substantial engagement with online platforms. Additionally, 29 respondents stated that they spend 2-4 hours per day on social media, reflecting a considerable portion of their daily activities. Moreover, 22 participants reported spending more than 6 hours per day on social media, highlighting an even deeper level of involvement. Conversely, 11 individuals mentioned using social media for less than 2 hours daily, suggesting a minority with limited engagement in online interactions.',
    },
    {
      image: graph2,
      title: 'Top Social Media App',
      description: 'Recent surveys have shed light on the popularity of various social media platforms among users. Instagram emerged as the clear favorite, with over 50% of respondents indicating their active presence on the platform, making it the most widely used social media platform. Following closely behind, YouTube garnered a significant user base, with approximately 30% of participants reporting regular usage. Twitter captured the attention of around 15% of the surveyed individuals, reflecting a notable but comparatively smaller portion of the user demographic. Other social media platforms collectively accounted for 5% of the respondents, indicating a diverse but less prevalent presence in the online sphere.  ',
    },
    {
      image: graph3,
      title: 'Reason to engage on social media',
      description: 'According to recent survey findings, the primary modes of engagement on social media vary significantly among users. A majority, comprising approximately 45.59% of respondents, admitted to getting lost in the intriguing depths of the social media "rabbit hole," succumbing to the allure of endless scrolling and exploration. Meanwhile, a substantial portion, approximately 26.47%, indicated their preference for utilizing social media platforms as sources of news and knowledge, actively seeking out valuable information. Additionally, around 25% of participants reported engaging in conversations with friends and family, highlighting the role of platform in facilitating interpersonal connections. A smaller yet notable fraction, approximately 4.41%, expressed a penchant for showcasing their own creativity and insights by sharing original content.',
    },
    {
      image: graph4,
      title: 'Popular Al-powered tool',
      description: 'The survey results shed light on the prevalence of AI-powered applications among respondents, with chatbots emerging as the most encountered tool, garnering a notable 45% of the responses. These conversational agents have become ubiquitous in various digital platforms, streamlining customer service interactions and providing instant assistance. Social media content recommendations followed, with 15% of participants indicating encounters with AI algorithms that curate personalized content tailored to their interests. Conversely, a small fraction of 10% admitted to not utilizing any AI-powered tools. Additionally, image generators garnered 4% of responses, while text generators and writing assistants were encountered by 25% of the surveyed individuals, underscoring their utility in content creation and ideation processes.',
    },
    {
      image: graph5,
      title: 'AI use cases',
      description: 'The survey findings unveil a spectrum of sentiments towards various AI applications, with respondents expressing particular excitement for certain use cases. Notably, 43% of participants expressed enthusiasm for AI potential to automate mundane tasks, freeing up time for more meaningful pursuits such as enjoying memes or spending time with pets. Another 37% showed interest in unleashing their inner artist through AI-powered tools, albeit with apprehensions about the concept of "body horror." Personalized learning also garnered attention, with 17% intrigued by the prospect of an ever-patient tutor. However, a small percentage of 3% showed reserved optimism for AI potential in medical breakthroughs, recognizing its capacity to save lives but refraining from explicit excitement.',
    },
    {
      image: graph6,
      title: 'Cons of AI',
      description: 'The survey delves into concerns surrounding various AI applications, highlighting the apprehensions of respondents regarding potential drawbacks. Notably, 32% expressed worry about the proliferation of deepfakes, fearing the chaos they could sow in an already complex digital landscape. Additionally, 23% voiced concerns over the invasion of privacy, pondering the extent to which AI might intrude into their thoughts. Furthermore, 17% expressed apprehension regarding job displacement, pondering whether machines could outperform them even in tasks as nuanced as humor. Issues of bias in decision-making by AI systems also troubled some, with 14% calling for robot ethics classes to address the issue. Finally, 6% remained primarily concerned about the prospect of AI systems going rogue, highlighting overarching fears about their unchecked autonomy.      ',
    },
    {
      image: graph7,
      title: 'Benefits of AI',
      description: 'The survey reveals the primary advantages individuals perceive in using social media platforms. A significant 50% value the opportunity to stay connected with friends and family, leveraging these platforms to remain updated and engaged with their social circles. Additionally, 20% emphasize the abundant entertainment social media offers, providing a welcome respite from the demands of daily life, particularly during study breaks. Another 19% highlight the sense of community they find, describing social media as a space where they can connect with like-minded individuals and find their tribe, fostering a sense of belonging and shared understanding. Finally, 5% appreciate social media as a platform for self-expression, where they can voice opinions, share experiences, and engage in conversations, even if they sometimes devolve into rants and complaints.',
    },
    {
      image: graph8,
      title: 'Cons of Social Media',
      description: 'The survey indicates the primary concerns individuals associate with social media usage. A notable 20.76% express feelings of inadequacy and comparison when confronted with others seemingly perfect lives, fostering a sense of dissatisfaction with their own reality. Additionally, 20.76% lament the addictive nature of the infinite scroll feature, which often leads to excessive screen time and detracts from real-world experiences. Another 20.76% highlight the prevalence of drama and negativity on social media platforms, which can contribute to stress and anxiety, prompting a desire for mental disengagement through meditation or other means. These findings underscore the complex relationship individuals have with social media, balancing its benefits with its detrimental effects on mental health and well-being.',
    },
    {
      image: graph9,
      title: 'Future expectations from AI',
      description: 'The survey outcomes reveal diverse perspectives on the future role of AI. A significant portion, comprising 46%, anticipate a nuanced scenario where AI brings about both positive and negative impacts, entwined with the unpredictable complexities of human interaction. Meanwhile, 26% foresee AI introducing unforeseen challenges, reflecting uncertainties about its evolution. Conversely, 20% express optimism, believing AI will usher in transformative changes for the better. Only 8% express skepticism, doubting whether AI will fulfill the lofty expectations set for it. These varied viewpoints underscore the multifaceted nature of AIs potential trajectory and its implications for society.',
    },
    {
      image: graph10,
      title: 'Future hope from social media',
      description: 'The survey participants express diverse hopes for the future of social media. A notable 29% aspire for it to evolve into a force for good, akin to a digital Justice League, championing positive causes and societal well-being. Another 23% anticipate social media role in combating fake news, advocating for measures that promote accuracy and accountability, perhaps through warning labels. Meanwhile, 26% envision a future where social media fosters genuine human connection, transcending superficialities to cultivate meaningful relationships. Interestingly, 22% harbor a wistful desire for social media to fade into obscurity, facilitating a return to authentic face-to-face interactions, although they acknowledge the improbability of such an outcome. ',
    }
  ];

  const Surveys = () => {
    return (
      <div className="cont1">
        <h1 className="pg-title">Surveys</h1>
  
        {items.map((item, index) => (
          <ResearchItem key={index} item={item} index={index} />
        ))}
      </div>
    );
  };
  
  const ResearchItem = ({ item, index }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();
    const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  
    React.useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      }
    }, [controls, inView]);
  
    if (isSmallScreen) {
      return (
        <motion.div
          ref={ref}
          className="pg-item"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.3, delay: index * 0.07 }}
        >
          <div className="pg-content">
            <div className="pg-image">
              <img src={item.image} alt={`Image ${index + 1}`} />
            </div>
            <div className="pg-text">
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
            </div>
          </div>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          ref={ref}
          className="pg-item"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.3, delay: index * 0.07 }}
        >
          <div className="pg-content">
            {index % 2 === 0 ? (
              <>
                <div className="pg-image">
                  <img src={item.image} alt={`Image ${index + 1}`} />
                </div>
                <div className="pg-text">
                  <h1>{item.title}</h1>
                  <h2>{item.description}</h2>
                </div>
              </>
            ) : (
              <>
                <div className="pg-text">
                  <h1>{item.title}</h1>
                  <h2>{item.description}</h2>
                </div>
                <div className="pg-image">
                  <img src={item.image} alt={`Image ${index + 1}`} />
                </div>
              </>
            )}
          </div>
        </motion.div>
      );
    }
  };
  
  
  export default Surveys;