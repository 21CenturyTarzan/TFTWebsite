/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI
 * 
 **************************************************************
 */

import React, { useEffect, useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";
// context
import { useDsWallet } from "configs/context/wallet";
// import { useContract } from "configs/context/contract";
import { useFormik } from "formik";
import { /*useSelector,*/ useDispatch } from "react-redux";
import * as yup from "yup";

// templates
import CoverLayout from "pages/Templates/CoverLayout";
import InputForm from "pages/Templates/InputForm";
import TFTTypography from "components/TFTTypography";

import { TFTWalletConnect } from "components/TFTWalletConnect";
// import { dsErrMsgGet } from "libs/ds-lib/ds-web3";

// slices
import { register } from "slices/auth";
import { Info } from "slices/messages";

// import { clearMessage } from "slices/messages";

export default function SignupPage() {
  const [showWallet, setShowWallet] = useState(false);
  const [connectingWallet, setConnectingWallet] = useState(false);
  const wallet = useDsWallet();
  // const contract = useContract();
  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);
  // const { message } = useSelector((state) => state.message);

  const validationSchema = yup.object().shape({
    username: yup.string()
      .min(3, "Username should be of minimum 3 characters length")
      .required("This field is required!"),
    email: yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string("Confirm your password")
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Please retype your password.')

  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      console.log("registering ...");
      const { username, email, password } = values;
      setSuccessful(false);

      dispatch(Info("Registering user...."));
      dispatch(register({ username, email, password }))
        .unwrap()
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  });

  const SignupFormData = [
    {
      type: "username",
      name: "username",
      caption: "Name:",
      placeholder: "Username",
    },
    {
      type: "email",
      name: "email",
      caption: "Email:",
      placeholder: "Email Address",
    },
    {
      type: "password",
      name: "password",
      caption: "Password:",
      placeholder: "************",
    },
    {
      type: "password",
      name: "confirmPassword",
      caption: "Confirm Password:",
      placeholder: "************",
    },
  ];

  const buttons = [
    {
      type: "submit",
      caption: "Signup",
      onClick: () => { },
    },
    {
      type: "walletconnect",
      caption: "Signup with wallet",
      onClick: handleConnectWallet,
    },
  ];

  useEffect(() => {
    if (!connectingWallet) {
      console.log("[DAVID] wallet-status : ", wallet.walletStat);
      return;
    }
    switch (wallet.walletStat) {
      case "error":
        setConnectingWallet(false);
        break;
      case "connected":
        setConnectingWallet(false);
        signUpWithWallet();
        break;
    }
  }, [wallet.walletStat])

  function signUpWithWallet() {
    console.log("[DAVID] wallet account = ", wallet.account);
    // dispatch(register({ wallet: wallet.account }))
    // contract.TFTAirdropRegister()
    //   .then(function () {
    //     console.log("[DAVID] registering airdrop succeeded! ")
    //   })
    //   .catch(function (error) {
    //     console.log("[DAVID] Failed to register airdrop. err = ", dsErrMsgGet(error.message))
    //   })
  }

  // clicking on signup with wallet.
  function handleConnectWallet() {
    if (wallet.isConnected())
      signUpWithWallet();
    else
      setShowWallet(true);
  }

  // when click connect on wallet connect ui.
  function walletConnect(connector) {
    setConnectingWallet(true)
    wallet.connectWallet(connector)
      .then(() => {
        console.log("[DAVID] connect finsh.")
      })
      .catch((e) => {
        console.log("[DAVID] connecting wallet failed. err = ", e.message);
      })
  }

  if (successful) {
    console.log("Register sucessfully.");
    // return <Redirect to="/profile" />;
  }

  return (
    <CoverLayout>
      <InputForm
        title="Sign Up"
        items={SignupFormData}
        formik={formik}
        buttons={buttons}
      >
        <TFTTypography
          variant="body2"
        >
          Already have an account?{" "}
          <TFTTypography
            component={Link}
            to="/signin"
            variant="button"
            color="info"
            fontWeight="medium"
            textGradient
          >
            Login here
          </TFTTypography>
        </TFTTypography>
      </InputForm>
      {
        showWallet &&
        <TFTWalletConnect
          close={() => setShowWallet(false)}
          walletConnect={walletConnect}
        />
      }
    </CoverLayout>
  );
}
