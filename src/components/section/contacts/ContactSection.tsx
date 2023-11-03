import { IContactPage } from '../../../../types';

interface contactSectionProps {
  data: IContactPage;
}

const ContactSection = ({ data }: contactSectionProps) => {
  return (
    <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-4 lg:px-0 py-32">
      <div className="mb-6">
        <h1 className="text-3xl font-medium text-white">
          <span className="text-primary-purple">/</span>
          {data.title}
        </h1>
        <p className="pt-3">{data.subTitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-24">
        <div className="md:col-span-6 text-primary-gray text-base font-normal">
          <p>{data.description1}</p>
          <p className="pt-8">{data.description2}</p>
        </div>
        <div className="md:col-span-6">
          <div className="border border-primary-gray mt-8 md:mt-0 py-4 px-4 md:w-[70%] md:ml-auto">
            <h2 className="text-base font-medium text-white pb-8">{data.contacts.title}</h2>
            <div>
              {data.contacts.contact.map((item, index) => (
                <div className="flex mb-6" key={index}>
                  <img className="w-6" src={item.img} alt={item.id} />
                  <p className="pl-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
