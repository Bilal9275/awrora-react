import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "next-i18next";
import imgAPI from "~/public/images/imgAPI";
import { useText, useTextAlign } from "~/theme/common";
import CommentForm from "../../Comment/Form";
import QuoteCard from "../../Cards/Testimonial/QuoteCard";
import Title from "../../Title";
import Item from "../../Comment/Item";
import useStyles from "./blog-style";

function PrvacyArticle() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation("common");

  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <article className={classes.article}>
        <div className={classes.content}>
          <div className={classes.boxTerm}>
            <h2 className={classes.termCase}>TedAI Privacy Policy</h2>
          </div>
          <h4 className={classes.effective}>Effective Date: 04.04.2024</h4>
          <h3 className={classes.effective}>1. Introduction</h3>
          <p className={classes.effectiveText}>
            Welcome to TedAI. We are committed to respecting your privacy and
            ensuring that your personal information is handled safely and
            responsibly. This Privacy Policy outlines how we collect, use,
            protect, and share information about you, obtained through
            www.tedai.com and our associated mobile applications.
          </p>

          <h3 className={classes.effective}>2. Information We Collect</h3>
          <p className={classes.effectiveText}>
            <b>
              We collect information to provide better services to all our
              users. The types of information we collect include:
            </b>
          </p>
          <p>
            Personal Information: This includes your name, address, email
            address, and telephone number, which you provide when you register
            on our platform, participate in our token sale, or interact with our
            customer support.
          </p>
          <p>
            Transactional Information: Details of any transactions you carry out
            through our site, including the purchase of TedAI tokens, which may
            include financial information such as your payment card details.
          </p>
          <p>
            Technical Information: This includes your IP address, login
            information, browser type and version, time zone setting, browser
            plug-in types, geolocation information about where you might be,
            operating system and version.
          </p>
          <p>
            Usage Information: This includes information about how you use our
            website and services, such as the pages viewed, website navigation
            paths, details of how often you use our app, and the time you spend
            on each page.
          </p>
          <h3 className={classes.effective}>3. How We Use Your Information</h3>
          <p className={classes.effectiveText}>
            We use the information we collect for several purposes:
          </p>
          <p>
            <b>Providing Services:</b> To administer our platform, manage your
            registration, and provide you with services you request from us.
          </p>
          <p>
            <b>Communication:</b> To communicate with you about updates,
            security alerts, and support messages.
          </p>
          <p>
            <b>Improvement and Development:</b> To improve and customize our
            services, including sharing insights based on aggregated or
            anonymized data derived from your use of the services.
          </p>
          <p>
            <b>Legal Obligations:</b> To meet legal and tax obligations and to
            provide information to regulatory bodies when required.
          </p>
          <h3 className={classes.effective}>4. Sharing and Disclosure</h3>
          <p className={classes.effectiveText}>
            We may share your information with selected third parties,
            including:
          </p>
          <p>
            Business partners, suppliers, and sub-contractors for the
            performance of any contract we enter into with them or you.
          </p>
          <p>
            Analytics and search engine providers that assist us in the
            improvement of our website.
          </p>
          <p>
            Legal authorities when required to do so by law or in response to
            valid requests by public authorities.
          </p>
          <p>
            Your information may also be shared with other parties in aggregated
            or non-identifiable forms that do not reasonably identify you
            directly as an individual.
          </p>
          <h3 className={classes.effective}>5. Security of Your Information</h3>
          <p className={classes.effectiveText}>
            We are committed to ensuring that your information is secure. We
            have put in place appropriate physical, electronic, and managerial
            procedures to safeguard and secure the information we collect
            online.
          </p>
          <h3 className={classes.effective}>6. Your Rights</h3>
          <p className={classes.effectiveText}>
            You have rights under data protection laws in relation to your
            personal data. These include the right to:
          </p>
          <p>Request access to your personal data.</p>
          <p>Request correction of the personal data that we hold about you.</p>
          <p>Request erasure of your personal data.</p>
          <p>Object to processing of your personal data.</p>
          <p>Request the transfer of your personal data to another party.</p>
          <h3 className={classes.effective}>
            7. Changes to Our Privacy Policy
          </h3>
          <p className={classes.effectiveText}>
            We may update this Privacy Policy periodically. We will notify you
            of any changes by posting the new Privacy Policy on this page. We
            encourage you to review this Privacy Policy periodically for any
            changes.
          </p>
          <h3 className={classes.effective}>8. Contact Us</h3>
          <p className={classes.effectiveText}>
            If you have any questions about this Privacy Policy, please contact
            us at contact@tedai.com.
          </p>
        </div>
      </article>
    </div>
  );
}

export default PrvacyArticle;
