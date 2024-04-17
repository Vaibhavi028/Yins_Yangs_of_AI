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
      description: 'The data indicates that most of the group, 26 people, spends between 4-6 hours per day on screens on average. There is also a significant group of 20 people in the 2-4 hour range, and a smaller but still substantial group of 15 people who report over 6 hours of daily screen time. The smallest group, with only 7 people, is those who spend under 2 hours per day on screens on average. Overall, the data suggests that screen usage is quite high, with the largest number of people falling into the “4-6 hour per day” category. This shows us that the digital devices and technologies have a significant role and impact on our daily lives.',
    },
    {
      image: graph2,
      title: 'Top Social Media App',
      description: 'Based on the data provided, it appears that Instagram is the dominant social media platform among the users, with 37 people using it the most. This suggests that the visual-centric content and features of Instagram, such as sharing photos, videos, and stories, are highly appealing to this group. The second-most popular app is YouTube, with 21 users. This indicates that video content consumption is also a significant part of these users’ social media habits, whether it’s for entertainment, educational, or informational purposes. The remaining apps, including Twitter, Facebook, Snapchat, and other apps like, ChatGPT, Reddit, WhatsApp, Chrome and Tachiyomi, each have a much lower user count, suggesting a more concentrated social media usage pattern within this group, rather than a diverse spread across multiple platforms.',
    },
    {
      image: graph3,
      title: 'Reason to engage on social media',
      description: 'Based on the provided data, it appears that many users (31people) on social media tend to "get lost in the rabbit hole" of content. The second-most common way of engaging is "hunting for news and knowledge", with 18 people doing so, followed by "chatting with friends and family", with 17 people engaging in this way. Only 2 people reported "sharing their own brilliance" as their primary mode of engagement, suggesting that self-expression is less common among this group, and the majority tend to be more passive consumers of social media content rather than active contributors.',
    },
    {
      image: graph4,
      title: 'Popular Al-powered tool',
      description: 'Based on the data provided, it appears that the AI-powered app or tool most encountered by the users is chatbots, with 31 people reporting this as their primary experience. This suggests that interactable and chat-able AI interfaces, such as generative and pretrained chatbots like ChatGPT, Claude, Gemini, etc. and virtual assistants like Google Assistant, Siri, etc. are widely used and integrated into the daily lives of this group. The second-most common AI-powered experiences are tied between social media content recommendations and text generators/writing assistants, with 12 people each reporting these as their primary encounters. This indicates that AI-powered personalization and content curation, as well as AI-assisted writing tools, are also widely utilized by this group. Only 3 people primarily utilise image generators, while the remaining 10 people reported not using any AI-powered apps or tools.',
    },
    {
      image: graph5,
      title: 'AI use cases',
      description: 'Based on the given data, it appears that the AI use case that most excites the users is personalized learning, with 30 people expressing enthusiasm for this application. This suggests a strong interest in AI-powered educational and training tools that can tailor content and experiences to individual needs and preferences, potentially enhancing learning outcomes and efficiency. The second-most exciting AI use case is automating boring tasks, with 12 people reporting this as a source of excitement. This indicates that users are eager to leverage AI to streamline and optimize mundane or repetitive activities, freeing up time and cognitive resources for more meaningful endeavours. The remaining 3 people each expressed excitement for unleashing their inner artist and medical breakthroughs, showcasing a diverse range of interests and expectations regarding the potential of AI. Additionally, 20 people reported not being excited about any AI use cases "yet", implying a potential gateway to exploring and discovering new applications as the technology continues to evolve.',
    },
    {
      image: graph6,
      title: 'Cons of AI',
      description: 'Based on the given data, the AI use case that seems to worry the users the most is “job displacement”, with 22 people expressing concern about this. This suggests injection of worries among the group due to the fear of the increased adoption and capabilities of AI could lead to the automation and replacement of human jobs, potentially disrupting livelihoods, and employment prospects.The second-most concerning AI use case is “deepfakes gone wild”, with 17 people reporting this as a case of concern. This indicates a recognition of the risks posed by the rapid growth of deceptive and manipulated media content, which can have serious implications for trust, truth, and integrity in the digital age. Moreover, 13 people are worried about “AI making biased decisions”, and 11 people are concerned about the “invasion of privacy”, highlighting the need for ethical and responsible AI development and usage. The remaining 5 people are mostly worried about “AI going rogue”, a more generic but still pressing concern about the potential for uncontrolled or unintended consequences of advanced AI systems.',
    },
    {
      image: graph7,
      title: 'Benefits of AI',
      description: 'Based on the data provided, the top 3 benefits that most of the users find in using social media are: 1. Discovering cool stuff they never knew existed (86 people) 2. Endless entertainment (85 people) 3. Staying in the loop with friends and family (81 people). These findings suggest that social media platforms are primarily used by this group for content discovery, entertainment, and maintaining social connections. The ability to stumble upon novel and interesting information, coupled with the endless stream of engaging content, seems to be a centre of attraction for most users. Staying connected with loved ones is also a key benefit, highlighting the role of social media in facilitating and strengthening interpersonal relationships. While finding one’s "tribe" is also identified as a benefit by 51 people ranking just below the top 3 priorities. Similarly, using social media as a platform for one’s own voice is the least prioritized benefit, with only 15 people reporting this as an advantage. Overall, the data indicates that the primary value proposition of social media for this group lies in its ability to provide a constant source of discovery, entertainment, and social connectivity, rather than as a medium for self-expression or community-building.',
    },
    {
      image: graph8,
      title: 'Cons of Social Media',
      description: 'Based on the data provided, the top 3 drawbacks that most of the users find in using social media are 1. The infinite scroll sucks me in (75 people), 2. Spreading misinformation faster than I can fact-check (68 people), 3. Feeling like everyone else’s life is perfect (59 people)These findings suggest that the most significant limitations of social media use for this group are the addictive nature of the platforms, the rapid spread of misinformation, and the negative impact on self-perception and mental health. The data indicates that the endless scrolling and content consumption on social media can be a significant time sink, with 75 people reporting this as a drawback. Additionally, 68 people are concerned about the ability of social media to amplify the spread of false or misleading information, which can have serious consequences in the current information landscape. Another major drawback is the feeling of envy stemming from the perception of everyone else’s "perfect" lives on social media, as reported by 59 people. This speaks to the potential negative impact of social media on users’ self-esteem and mental well-being. While drama and negativity on social media platforms are also a concern for 56 people, and 47 people feel that social media use has made it harder to interact with people in real life, these drawbacks rank slightly lower compared to the top 3 issues. Overall, the data suggests that the primary drawbacks of social media use for this group are related to the addictive and misinformation-prone nature of the platforms, as well as the potential for negative psychological impacts on users.',
    },
    {
      image: graph9,
      title: 'Future expectations from AI',
      description: 'Based on the data provided, most users, i.e. 73 people believe that AI will have both positive and negative impacts in the future. This suggests an overall recognition that the development and widespread adoption of AI technology will bring about a complex mix of benefits and challenges. The second-largest group of 42 people believes that AI will lead to problems that we haven’t even thought of yet. This reflects a cautious outlook, acknowledging the potential for unintended consequences and the need for proactive consideration of the long-term implications of AI. A significant number of users, i.e. 32 people are more optimistic, believing that AI will "change everything... hopefully mostly for good." This indicates a belief that the transformative potential of AI can be leveraged to bring about positive change and improvements across various domains. However, a smaller group of 12 people believes that AI will not live up to the hype, suggesting a more sceptical view of the technology’s ability to deliver on the high expectations and promises often it’s associated with. Overall, the data suggests mixed perspective among users, with a majority recognizing the dual-edged nature of AI’s impact, while a substantial portion also acknowledges the potential for both positive transformation and unforeseen challenges. This highlights the need for a thoughtful and balanced approach to the development and deployment of AI technologies.',
    },
    {
      image: graph10,
      title: 'Future hope from social media',
      description: 'Based on the data provided, the top hope for the future of social media among the users is that it becomes "a force for good," with 48 people expressing this sentiment. This suggests a desire for social media platforms to be leveraged in a way that positively impacts society, potentially by highlighting important issues, enabling meaningful activism, or fostering constructive dialogues. The second-most common hope is for social media to "foster genuine connection," as reported by 43 people. This indicates a hope that social media can move away from fake interactions and instead facilitate deeper, more meaningful relationships and communities. Another significant hope is for social media to "help combat fake news," with 39 people expressing this view. This reflects a recognition of the challenges posed by the significant increase of misinformation on social media platforms and a desire for them to play a role in addressing this issue. Lastly, 37 people hope that social media will "disappear, and we all learn to talk face-to-face again." This suggests a yearning for a return to more traditional forms of human interaction and a reduction in the reliance on digital communication platforms. Overall, the data highlights a diverse set of hopes, wishes and expectations for the future of social media, ranging from harnessing its potential as a force for good to reducing its dominance in favour of in-person interaction. These perspectives reflect the complex and multifaceted nature of the role that social media plays in people’s lives.',
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
