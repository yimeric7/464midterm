import Navbar from '../../components/navbar/Navbar.jsx';
import './About.css';
import KanyePic1 from '../../assets/kanye1.png';
import KanyePic2 from '../../assets/kanye2.jpg';

function About() {
  return (
    <div>
      <Navbar />
      <div className="app">
        <header className="header">
          <h1>Kanye West Wiki</h1>
        </header>
        <section className="bio">
          <h2>Biography</h2>
          <img src={KanyePic1} alt="Kanye West" className="bio-image-right" />
          <p>
            Kanye Omari West, born June 8, 1977, is an American rapper, singer,
            songwriter, record producer, and fashion designer. His journey began
            in Atlanta, Georgia, but he was raised in Chicago, Illinois, after
            his parents divorced when he was three. Showing an early interest in
            the arts, West attended Chicago State University for one semester
            before dropping out to pursue music full-time, a decision that would
            later inspire his debut album's title.
          </p>
          <p>
            West initially gained recognition as a producer for Roc-A-Fella
            Records in the early 2000s, contributing to hit albums for artists
            like Jay-Z. However, his ambition was to be a rapper, and he
            struggled to be taken seriously by the industry due to his deviation
            from the then-dominant gangsta persona in hip-hop. His breakthrough
            came with the 2004 release of "The College Dropout," which received
            critical and commercial success and set the tone for a career that
            would continuously push the boundaries of hip-hop music.
          </p>
          <img src={KanyePic2} alt="Kanye West" className="bio-image-left" />
          <p>
            Over the years, West has become known for his innovative and
            polarizing music, his foray into the fashion industry, and his
            candid public persona. His discography includes landmark albums such
            as "Late Registration," "Graduation," "My Beautiful Dark Twisted
            Fantasy," and "Yeezus," each marked by periods of intense creativity
            and controversy.
          </p>
          <p>
            Beyond music, West has made significant impacts in fashion,
            launching his Yeezy brand with Adidas and influencing streetwear and
            high fashion. His design work extends to album covers, stage design,
            and architecture.
          </p>
          <p>
            West's public life has been equally eventful, marked by his
            outspoken views, a brief foray into politics, and his advocacy for
            mental health awareness following his bipolar disorder diagnosis.
            Despite controversies, West's contributions to music, fashion, and
            culture have made him one of the most influential artists of his
            generation.
          </p>
        </section>
        <section className="discography">
          <h2>Discography</h2>
          <ul>
            <li>The College Dropout (2004)</li>
            <li>Late Registration (2005)</li>
            <li>Graduation (2007)</li>
            <li>808s &amp; Heartbreak (2008)</li>
            <li>My Beautiful Dark Twisted Fantasy (2010)</li>
            <li>Watch the Throne (with Jay-Z) (2011)</li>
            <li>Yeezus (2013)</li>
            <li>The Life of Pablo (2016)</li>
            <li>Ye (2018)</li>
            <li>Kids See Ghosts (with Kid Cudi as Kids See Ghosts) (2018)</li>
            <li>Jesus Is King (2019)</li>
            <li>Donda (2021)</li>
          </ul>
        </section>
        <section className="awards">
          <h2>Awards</h2>
          <ul>
            <li>
              21 Grammy Awards, including Best Rap Album for "The College
              Dropout" (2005), "Late Registration" (2006), "Graduation" (2008),
              and "My Beautiful Dark Twisted Fantasy" (2012).
            </li>
            <li>
              MTV Video Music Awards - Best Male Video for "Stronger" (2008).
            </li>
            <li>
              BET Awards - Best Collaboration for "Otis" with Jay-Z (2012).
            </li>
            <li>
              Billboard Music Awards - Top Rap Album for "The Life of Pablo"
              (2017).
            </li>
            <li>GQ Artist of the Year (2007, 2020).</li>
            <li>
              Time 100: The Most Influential People in the World (2005, 2011,
              2015).
            </li>
            <li>Fashion Group International's Star Honoree (2011).</li>
            <li>Webby Award for Artist of the Year (2016).</li>
          </ul>
        </section>
        <footer className="footer">
          <p>Page created for educational purposes.</p>
        </footer>
      </div>
    </div>
  );
}

export default About;
