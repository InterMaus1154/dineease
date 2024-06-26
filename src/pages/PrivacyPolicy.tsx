import {FC} from "react";

const PrivacyPolicy: FC = () => {
    return (
        <section className={"Privacy-policy-section"}>
            <h1 className={"Section-heading"}>Privacy policy</h1>
            <h2 className="Section-subheading">DineEase Showcase Website</h2>
            <h3 className="Section-subheading">Data Protection and User Privacy</h3>
            <p>At DineEase, we value your privacy and are committed to safeguarding your personal information. This
                Privacy Policy outlines how we collect, use, and protect your data when you access and use our platform.
                By using DineEase, you agree to the terms outlined in this policy.</p>
            <section className={"Privacy-policy-partial-section"}>
                <h4>Information Collection:</h4>
                <p>We collect certain personal information, such as your name, email address, and location, to enhance
                    your dining experience. This data is voluntarily provided by you when you create an account or
                    interact with our platform.</p>
            </section>
            <section className={"Privacy-policy-partial-section"}>
                <h4>Use of Information:</h4>
                <p>The information we collect is used to personalize your dining recommendations, improve our services,
                    and keep you informed about the latest updates and offers. Rest assured, we will never share or sell
                    your personal information to third parties without your consent.</p>
            </section>
            <section className={"Privacy-policy-partial-section"}>
                <h4>Cookies and Tracking:</h4>
                <p>DineEase uses cookies to enhance user experience and provide personalized content. These cookies may
                    track your browsing behavior on our platform. You can manage your cookie preferences through your
                    browser settings.</p>
            </section>
            <section className={"Privacy-policy-partial-section"}>
                <h4>Data Security:</h4>
                <p>We employ industry-standard security measures to protect your data from unauthorized access,
                    alteration, or disclosure. However, it is essential to understand that no online platform can
                    guarantee 100% security, and you use DineEase at your own risk.</p>
            </section>
            <section className={"Privacy-policy-partial-section"}>
                <h4>Third-Party Links:</h4>
                <p>DineEase may contain links to external websites and services. We do not have control over the privacy
                    practices of these third-party sites. Please review their respective privacy policies before
                    providing any personal information.</p>
            </section>
            <section className={"Privacy-policy-partial-section"}>
                <h4>Updates and Amendments:</h4>
                <p>DineEase may update this Privacy Policy from time to time to reflect changes in data regulations or
                    platform enhancements. We recommend checking this page periodically for the latest information.</p>
            </section>
            <p>If you have any questions or concerns regarding our Privacy Policy or how we handle your data, please feel free to contact our support team at <a
                href="mailto:privacy@dineease.com">privacy@dineease.com</a></p>

        </section>
    );
};

export default PrivacyPolicy;
