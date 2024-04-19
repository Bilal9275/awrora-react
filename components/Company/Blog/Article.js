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

function Article() {
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
            <h2 className={classes.termCase}>TedAI Terms of Use</h2>
          </div>
          <h4 className={classes.effective}>Effective Date: 04.04.2024</h4>
          <h3 className={classes.effective}>1. Introduction</h3>
          <p className={classes.effectiveText}>
            Welcome to TedAI! These Terms of Use govern your access to and use
            of our website, mobile applications, services, and products
            (collectively, "Services"), provided by TedAI.
          </p>
          <p>
            By accessing or using our Services, you agree to be bound by these
            Terms and all terms incorporated by reference. If you do not agree
            to all of these terms, do not use our Services.
          </p>
          <h3 className={classes.effective}>2. Eligibility</h3>
          <p className={classes.effectiveText}>
            To access or use our Services, you must be at least 18 years old or
            the age of legal majority in your jurisdiction, whichever is higher.
            By using TedAI, you represent and warrant that you meet this age
            requirement.
          </p>
          <h3 className={classes.effective}>3. TedAI Account</h3>
          <p className={classes.effectiveText}>
            <b>Registration:</b> You may need to register for a TedAI account to
            access certain services. By registering, you agree to provide
            accurate, current, and complete information and to keep this
            information updated.
          </p>
          <p>
            <b>Security:</b> You are responsible for safeguarding your account
            password and for all activities that occur under your account. TedAI
            cannot and will not be liable for any loss or damage arising from
            your failure to comply with the above.
          </p>
          <h3 className={classes.effective}>4. Intellectual Property Rights</h3>
          <p className={classes.effectiveText}>
            All intellectual property rights in the Services, including the
            design, graphics, text, and all software and source codes connected
            with the Services, are owned by TedAI or its licensors. You may use
            the Services only as expressly permitted by these Terms and any
            applicable laws.
          </p>
          <h3 className={classes.effective}>5. Use of Services</h3>
          <p className={classes.effectiveText}>
            You agree to use the Services only for lawful purposes and not to:
          </p>
          <p>
            Engage in any activity that disrupts, interferes with, or restricts
            the use of the Services by other users.
          </p>
          <p>
            Upload, post, or distribute to or through the Services any material
            or information that is illegal, harmful, threatening, abusive,
            harassing, defamatory, vulgar, obscene, or otherwise objectionable.
          </p>
          <p>
            Attempt to gain unauthorized access to the Services, other accounts,
            computer systems, or networks connected to the Services.
          </p>
          <h3 className={classes.effective}>6. Modifications to Services</h3>
          <p className={classes.effectiveText}>
            TedAI reserves the right at any time and from time to time to modify
            or discontinue, temporarily or permanently, the Services (or any
            part thereof) with or without notice. You agree that TedAI shall not
            be liable to you or to any third party for any modification,
            suspension, or discontinuance of the Services.
          </p>
          <h3 className={classes.effective}>7. Termination</h3>
          <p className={classes.effectiveText}>
            TedAI may terminate or suspend your access to all or part of the
            Services immediately, without prior notice or liability, if you
            breach any of the terms or conditions of these Terms.
          </p>
          <h3 className={classes.effective}>8. Disclaimers</h3>
          <p className={classes.effectiveText}>
            The Services are provided on an "as is" and "as available" basis.
            TedAI expressly disclaims all warranties of any kind, whether
            express or implied, including, but not limited to, the implied
            warranties of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
          <h3 className={classes.effective}>9. Limitation of Liability</h3>
          <p className={classes.effectiveText}>
            In no event shall TedAI, its officers, directors, employees, or
            agents be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from or related to your
            use of the Services.
          </p>
          <h3 className={classes.effective}>10. Governing Law</h3>
          <p className={classes.effectiveText}>
            These Terms shall be governed by and construed in accordance with
            the laws of [Jurisdiction], without giving effect to any principles
            of conflicts of law.
          </p>
          <h3 className={classes.effective}>11. Changes to Terms</h3>
          <p className={classes.effectiveText}>
            TedAI reserves the right to change or update these Terms at any time
            by posting the most current version of the Terms on the site with a
            new effective date shown.
          </p>
          <h3 className={classes.effective}>12. Contact Us</h3>
          <p className={classes.effectiveText}>If you have any questions about these Terms, please contact us at contact@tedai.com.</p>
        </div>
      </article>
    </div>
  );
}

export default Article;
