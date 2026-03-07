const TermsConditions = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Terms & Conditions
        </h1>

        <div
          className="
            prose prose-gray
            prose-p:my-4
            prose-h2:mt-8 prose-h2:mb-3
            leading-relaxed
            max-w-none
            text-sm md:text-base
          "
        >
          {/* 👉 PASTE YOUR TERMS & CONDITIONS CONTENT BELOW */}

          <p>
            Please read these Terms and Conditions carefully before using the
            UnchaAI website and services.
          </p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using this Website, you agree to be bound by these
            Terms and Conditions. If you do not agree, please do not use the
            Website.
          </p>

          <h2>Use of Website</h2>
          <p>
            The content provided on this Website is for general informational
            and educational purposes only. Unauthorized use is strictly
            prohibited.
          </p>

          <h2>User Responsibilities</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their
            account information and for all activities conducted under their
            account.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content, logos, graphics, and materials on this Website are the
            property of UnchaAI and are protected by applicable intellectual
            property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            UnchaAI shall not be liable for any direct, indirect, incidental, or
            consequential damages arising from the use of this Website.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and interpreted in
            accordance with the laws of India.
          </p>

          <p className="mt-6">
            If you have any questions regarding these Terms & Conditions, please
            contact us at{" "}
            <a
              href="mailto:info@unchaai.com"
              className="text-primary-500 underline"
            >
              info@unchaai.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;