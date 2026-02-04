import v_a3453e from 'bapkr';
import { v_472849, v_19b633, v_3094a2 } from 'rcmrninabrnb';
import { v_772971 } from 'jmpfvteuuztnp';
import type { v_432191 } from 'xpfgrcdafpntkgxfmgxpxnedjkvmtc';
import { v_1bfbd0, v_843035, v_9b1a04 } from '../../constants';
import { v_729608, v_570c34, v_1c1837 } from '../../components';
import type { v_8ad91b } from '../../navigation';
import { v_a0daa8 } from '../../navigation';

type Props = v_432191<v_8ad91b, 'ClauseDetail'>;

const ClauseDetailScreen: v_a3453e.FC<Props> = ({ route: v_c7daf6 }) => {
  const { t: v_8d41d7 } = v_772971();
  const { goBack: v_c7ac57 } = v_a0daa8();
  const { clauseType: v_4898e2 } = v_c7daf6.params;

  const v_9f1622 = v_4898e2 === 'terms' ? v_8d41d7('my_info_clauses.terms_title') : v_8d41d7('my_info_clauses.privacy_title');

  return (
    <MainLayout activeKey="myinfo">
      <View style={v_d81136.container}>
        <Header title={v_9f1622} showBackButton onBackPress={v_c7ac57} />
        <SafeScrollView style={v_d81136.scrollView} contentContainerStyle={v_d81136.content} showBottomBackground={false} disableBottomPadding={true}>
          <Text style={v_d81136.text}>
            {v_4898e2 === 'terms'
              ? `
XRUN Location-Based Service Terms and Conditions

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
*Addendum Article 1 (Effective Date) These Terms and Conditions are effective as of July 11, 2022.
`
              : `
PRIVACY POLICY

1. What is Privacy Policy? XRUN LLC (hereinafter referred to as the "Company") collects, uses, and provides personal information based on the consent of users, and actively guarantees the rights of users (the right to self-determination of personal information). The Company complies with relevant laws and regulations on personal information protection and the guidelines of the Republic of Korea that must be complied with by information and communication service providers. "Personal Information Handling Policy" means the guidelines that must be followed by the company so that users can use the service with confidence by protecting their valuable personal information. This privacy policy applies to XRUN account-based services (hereinafter referred to as 'services') provided by the company.

2. Collection of personal information We collect the minimum personal information necessary to provide the service. [XRUN Account] Required email, password, name, contact information, service usage history. Selected gender, age, and region of residence. Some services may collect additional personal information with the user's consent in addition to the information usually collected by the 'XRUN account' to provide various special functions. The method of collecting personal information is as follows. In the case of collecting personal information, we shall notify users in advance and ask for their consent. When the user consents to the collection of personal information and directly enters the information in the process of membership registration and use of the service. When personal information is provided from the service or affiliated organization. Information generated during the process of using PC web and mobile web/apps (device info, IP, cookies, visit time, usage records) may be collected.

3. Use of personal information Used for member management, provision and improvement of services, and development of new services. Member identification, prevention of illegal use, handling inquiries/complaints, providing notifications, preventing actions that hinder service operation, customized content recommendations, statistics on service use, and improving privacy protection environments.

4. Provision of personal information XRUN does not provide the user's personal information to third parties, except in cases where there is separate consent from the user or as stipulated by laws and regulations. Personal information may be provided to third parties within the scope necessary for users to use external affiliate services after additional consent. Certain tasks may be entrusted to external companies to provide services; we manage and supervise entrusted companies to comply with related laws.

5. Destruction of personal information Personal information is destroyed without delay when the purpose of collection and use is achieved. Electronic files are securely deleted, and printed materials are shredded or incinerated. However, some information may be stored for up to one year after withdrawal to respond to inquiries or prevent misuse.

6. Others XRUN protects user rights. Users can view or correct their personal information at any time, and may withdraw consent for collection and use. Requests are handled promptly via the service settings or customer center. XRUN complies with GDPR when serving EU users; users may request data portability, refuse processing, or file complaints with authorities.

7. Contact If you have questions about personal information protection, contact:
Personal Information Protection Officer: Wonyong Jeung
Responsible Department: XRUN Lab
Email: oth-staff@example.invalid / Customer Center: oth-test@example.invalid
You may also contact national privacy agencies (KISA, Supreme Prosecutors' Office, National Police Agency) for assistance.

Announcement Date: July 11, 2022 / Effective Date: July 11, 2022
              `}
          </Text>
        </SafeScrollView>
      </View>
    </MainLayout>
  );
};

const v_d81136 = v_472849.create({
  container: {
    flex: 1,
    backgroundColor: v_1bfbd0.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: v_9b1a04.large,
  },
  text: {
    fontSize: 14,
    color: v_1bfbd0.text,
    lineHeight: 22,
  },
});

export default v_5fdcb2;

