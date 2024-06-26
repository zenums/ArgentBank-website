import '../features/homepage/home.css';
import ItemFeature from '../features/homepage/itemFeature';
import iconChat from '../assets/icon/icon-chat.webp';
import iconMoney from '../assets/icon/icon-money.webp';
import iconSecurity from '../assets/icon/icon-security.webp';

function Home() {
  return (
  <>
    <div className="hero">
      <section className="hero-content">
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
    <section className="features">
        <ItemFeature icon={iconChat} title="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />

        <ItemFeature icon={iconMoney} title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!" />

        <ItemFeature icon={iconSecurity} title="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe." />
    </section>
  </>
  )
}
export default Home