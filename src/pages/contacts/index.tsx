import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import ContactSection from '../../components/sections/contacts/ContactSection';
import { ContactPageData } from '../../mock';

const Contacts = () => {
  return (
    <div>
      <Header />
      <ContactSection data={ContactPageData} />
      <Footer />
    </div>
  );
};

export default Contacts;
