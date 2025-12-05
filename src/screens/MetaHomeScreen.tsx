import v_a3453e from 'bapkr';
import {
  v_03e392,
  v_472849,
  v_19b633,
  v_4623af,
  v_3094a2,
} from 'rcmrninabrnb';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_dec439 } from 'zvyjokvuouwvifyzks';
import { v_f4e704, v_c92f00, v_729608, v_570c34 } from '../components';
import type { v_8ad91b } from '../navigation';
import { v_a0daa8 } from '../navigation';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../constants';
import type { v_7369b0 } from '../components/BottomNavigationBar';
import { v_556baf } from '../components';

type Props = v_432191<v_8ad91b, 'MetaHome'>;

const v_c1dbad = [
  {
    id: 'jackson',
    name: 'Jackson',
    relation: 'Brother',
    avatar: {
      uri: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=facearea&w=200&h=200&q=80',
    },
  },
  {
    id: 'mom',
    name: 'MOM',
    relation: 'Mother',
    avatar: undefined,
    placeholderColor: '#FFB7BE',
  },
];

const bottomNavItems: v_7369b0[] = [
  { key: 'home', label: 'MetaHint AI', icon: 'home', route: 'MetaHome' },
  { key: 'shop', label: 'Shop', icon: 'shopping-cart' },
  { key: 'wallet', label: 'Wallet', icon: 'credit-card', route: 'Wallet' },
  { key: 'profile', label: '프로필', icon: 'user', route: 'MyInfo' },
];

const MetaHomeScreen: v_a3453e.FC<Props> = () => {
  const { navigate: v_9b57fc } = v_a0daa8();

  const v_116756 = (item: v_7369b0) => {
    if (v_8c0b26.route) {

      const v_c7daf6 = v_8c0b26.route as keyof v_8ad91b;
      v_9b57fc(v_c7daf6 as any);
      return;
    }

    v_03e392.alert('안내', `${v_8c0b26.label} 화면은 준비 중입니다.`);
  };

  return (
    <SafeView
      style={v_d81136.screen}
      showBottomBackground={false}
      bottomBackgroundColor={"#fafafa"}
    >
      <Header
        title="MetaHint"
      />
      <SafeScrollView
        style={v_d81136.container}
        showBottomBackground={false}
      >
        <Text>XRUN Location-Based Service Terms and Conditions

          Article 1 (Purpose)
          These terms and conditions relate to the rights, obligations, and responsibilities between the company and the subject of personal location information (hereinafter referred to as "user") using location-based services for location-based services provided by XRUN LLC (hereinafter referred to as "Company"), for the purpose of regulating other necessary matters.

          Article 2 (Effect and Changes to Terms of Use)
          1. These terms and conditions apply when the user agrees to these terms and conditions and registers as a user of location-based services in accordance with the procedures established by the company.
          2. The company may change the terms and conditions for the purpose of reflecting changes in laws or location-based services.
          3. If the terms and conditions are changed, the company will post the changes at least 7 days in advance through other notification pages such as the company's website.
          4. However, if there is a significant change in user rights, the revised content will be posted 30 days in advance.

          Article 3 (Rules other than terms and conditions)
          For matters not specified in these terms and conditions, relevant laws such as the Act on Protection and Use of Location Information, the Telecommunications Business Act, the Act on Promotion and Protection of Information and Utilization of Communications Networks, etc. and guidelines set by the company, etc. follow the rules.

          Article 4 (Service Content)
          The company provides the following location-based services by using the user's current location or the area containing the current location collected directly or from a location information service provider.
          1. Providing or recommending information search results and content using location information
          2. Location sharing for convenience, location/region-based notifications, route guidance
          3. Content tagging for location-based content classification (Geotagging)
          4. Location-based special advertising

          Article 5 (Service usage fees)
          Location-based services provided by the company are free of charge. However, data communication charges incurred when using wireless services are separate, and follow the policies of each mobile operator to which the user subscribes.

          Article 6 (Restriction and Suspension of Use of Services)
          1. The Company may restrict, change, or suspend all or part of the location-based services if it is unable to maintain the location-based services due to various circumstances or legal reasons, such as changes in the provider's location-based service policy.
          2. However, in the event of termination of the location-based services in accordance with the above clause, the Company shall notify the User in advance through another notification page such as the Company's website.

          Article 7 (Rights of Subjects of Personal Location Information)
          1. Users may withhold all or part of their consent to the collection, use, and provision of personal location information at any time.
          2. Users may withdraw all or part of their consent to the collection, use, and provision of personal location information at any time. In this case, the Company shall destroy the personal location information within the withdrawn range and the data confirming the collection, use, and provision of location information without delay.
          3. Users may request a temporary suspension of the collection, use, and provision of personal location information, in which case, the Company shall not refuse it and shall provide technical means to comply.
          4. Users may request the company to view or notify the materials confirming the collection, use, and provision of location information, and may request corrections where necessary.

          Article 8 (Use or provision of personal location information)
          When the company uses personal location information to provide location-based services, the company will be notified in these terms and conditions and consent will be obtained. The company shall not provide personal location information to a third party without the user's consent, and in the case of providing it to a third party, the recipient and purpose of the provision shall be notified to the user in advance and consent will be obtained.

          Article 9 (Legal Representative Rights)
          For users under the age of 14, the company must obtain the consent of the user and the user's legal representative for the provision of location-based services using personal location information and the provision of personal location information to third parties.

          Article 10 (Rights of the person responsible for protecting the consent of children under the age of 8)
          If the protector consents to the use or provision of personal location information for children under the age of 8, he/she has all user rights under Article 7 of these Terms and Conditions.

          Article 11 (Compensation)
          If the user has suffered damage due to acts that violate Articles 15 and 26 of the Law on Protection and Use of Corporate Location Information, the user may claim compensation from the Company.

          Article 12 (Limitation of Liability)
          The Company shall not be liable for any damages incurred by the user if the location-based service cannot be provided in cases such as natural disasters, actions of third parties, or reasons attributable to the user.

          Article 13 (Dispute Resolution)
          1. The Company faithfully consults with users to resolve disputes related to location information.
          2. If the dispute is not resolved, the Company and the user may apply for mediation to the Korea Communications Commission or the Personal Information Dispute Mediation Committee.

          Article 14 (Company Address and Contact Information)
          Company Name: XRUN
          Representative: Bob Kwon
          Address: First Floor, First St. Vincent Bank Ltd Building, James Street, Kingstown, St. Vincent and the Grenadines P.O. Box 1574
          email: oth-test@example.invalid
          *Addendum Article 1 (Effective Date) These Terms and Conditions are effective as of July 11, 2022.</Text>
      </SafeScrollView>
      <View >
        <BottomNavigationBar
          items={v_fce460}
          activeKey="home"
          onTabPress={v_116756}
        />
      </View>
    </SafeView>
  );
};

const v_d81136 = v_472849.create({
  screen: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    width: '100%',
    maxWidth: 780,
    paddingHorizontal: v_9b1a04.large,
    paddingVertical: v_9b1a04.large,
    flex: 1,
  },

  sectionTitle: {
    fontSize: 18,
    fontFamily: v_843035.bold,
    color: v_1bfbd0.text,
    marginBottom: v_9b1a04.small,
  },

  historySection: {
    width: '100%',
    gap: v_9b1a04.medium,
  },
  testSection: {
    width: '100%',
    gap: v_9b1a04.medium,
  },
  headerActions: {
    flexDirection: 'row',
    gap: v_9b1a04.small,
    paddingTop: 20,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    borderWidth: v_472849.hairlineWidth,
    borderColor: '#E3E7EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adWrapper: {
    paddingHorizontal: v_9b1a04.large,
    paddingBottom: v_9b1a04.medium,
    width: '100%',
    alignItems: 'center',
  },
  adBanner: {
    width: '100%',
    maxWidth: 780,
    borderRadius: 18,
    backgroundColor: '#E6E1D9',
    borderWidth: 1,
    borderColor: '#E4C65E',
    paddingVertical: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  adText: {
    fontSize: 18,
    fontFamily: v_843035.semibold,
    color: v_1bfbd0.text,
  },
});

export default v_7aeeb0;

