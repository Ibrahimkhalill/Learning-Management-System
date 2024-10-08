import { useState } from "react";
import profile from "../assets/profile.png";
function Enroll() {
  const [activeFirst, setactiveFirst] = useState(false);
  const [activeSecond, setActiveSecond] = useState(false);
  const [activeThrid, setActiveThird] = useState(false);
  const handleVisibleFirst = () => {
    setactiveFirst(true);
  };
  return (
    <div className="lg:min-h-[calc(100vh_-_347px)] bg-slate-900">
      <div className="py-10 lg:py-20">
        <div className="container">
          <div className="mantine-Stepper-root mantine-15po0m8">
            <div className="mantine-1bbggxs flex md:flex-row flex-col items-start gap-2 md:items-center  mantine-Stepper-steps">
              <button
                className="mantine-UnstyledButton-root mantine-Stepper-step mantine-Stepper-stepProgress mantine-1p0p2fv"
                type="button"
                tabIndex="-1"
              >
                <div
                  className={` ${
                    activeFirst ? "bg-cyan-600" : ""
                  } border-cyan-600 mantine-circle mantine-Stepper-stepIcon`}
                >
                  {activeFirst ? (
                    <svg
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ) : (
                    1
                  )}
                </div>
                <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                  <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-1g4t7xz">
                    নির্দেশনা
                  </div>
                  <div className="mantine-Text-root mantine-Stepper-stepDescription mantine-bmg3og">
                    কিভাবে এনরোল করবেন
                  </div>
                </div>
              </button>

              <div className="mantine-1yj7uzz mantine-Stepper-separator"></div>
              <button
                className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                type="button"
                tabIndex="-1"
              >
                <div
                  className={` ${
                    activeFirst ? "border-cyan-600" : ""
                  } mantine-circle mantine-Stepper-stepIcon`}
                >
                  3
                </div>
                <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                  <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-1g4t7xz">
                    নিবন্ধন
                  </div>
                  <div className="mantine-Text-root mantine-Stepper-stepDescription mantine-bmg3og">
                    আপনার তথ্য দিন
                  </div>
                </div>
              </button>
              <div className="mantine-1yj7uzz mantine-Stepper-separator"></div>
              <button
                className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                type="button"
                tabIndex="-1"
              >
                <div
                  className={` ${activeThrid} mantine-circle mantine-Stepper-stepIcon`}
                >
                  4
                </div>
                <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                  <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-1g4t7xz">
                    পেমেন্ট
                  </div>
                  <div className="mantine-Text-root mantine-Stepper-stepDescription mantine-bmg3og">
                    কোর্স ফি পরিশোধ করুন
                  </div>
                </div>
              </button>
            </div>
          </div>
          {!activeFirst && (
            <div className="mantine-1erkqyx mantine-Stepper-content">
              <div className="py-14">
                <div className="w-full text-center">
                  <h1 className="section-title">
                    <span className="primary-highlighter">নির্দেশনা</span>
                  </h1>
                  <p className="subtitle">
                    কোর্সটিতে এনরোল করার পূর্বে দয়া করে নিচের নির্দেশিকাটি ভাল
                    করে পড়ে নিন
                  </p>
                </div>
                <div className="mt-10">
                  <div className="mantine-Stepper-root mantine-15po0m8">
                    <div className="mantine-vrpx4j mantine-Stepper-steps">
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          1
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            কোর্সটি একটি অন্য-ডিমান্ড, ভিডিও অনলি এবং লিমিটেড
                            সাপোর্ট কোর্স। আপনি যেকোন সময় কোর্সটি ক্রয় করতে
                            পারবেন এবং নিজের সময়মতো ধাপে ধাপে সেলফ স্টাডি করে
                            ভিডিও দেখে দেখে শিখতে পারবেন।
                          </div>
                        </div>
                      </button>
                      <div className="mantine-4eewve mantine-Stepper-separator"></div>
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          2
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            কোর্সটি করলে আপনি কোন সার্টিফিকেট পাচ্ছেন না।
                            কোর্সটি শুধুমাত্র আপনাকে রিডাক্স খুব ভালভাবে বুঝতে
                            সাহায্য করবে এবং সামগ্রিকভাবে আপনার জাভাস্ক্রিপ্ট ও
                            রিয়্যাক্ট জেএস কনসেপ্ট আরো ভাল করবে। শুধু
                            সার্টিফিকেট প্রাপ্তি যদি আপনার উদ্দেশ্য হয় তাহলে এই
                            কোর্সটি আপনার জন্য নয়। যদি শেখাটাই আপনার মুখ্য
                            উদ্দেশ্য হয়, তাহলে সামনে আগাতে পারেন।
                          </div>
                        </div>
                      </button>
                      <div className="mantine-4eewve mantine-Stepper-separator"></div>
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          3
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            কোর্সটির সাথে কোন সাপোর্ট কমিটমেন্ট থাকছেনা। এটা
                            ভিডিও অনলি, সেলফ-পেসড কোর্স। তবে কোথাও আটকে গেলে
                            আপনি আমাদের ডিসকোর্ড প্রাইভেট কমিউনিটিতে পোস্ট করতে
                            পারবেন এবং কমিউনিটি মেম্বাররা তাদের সময় অনুযায়ী
                            সহযোগিতা করার চেষ্টা করবে। তবে এক্ষেত্রে কোন সাপোর্ট
                            কমিটমেন্ট থাকছেনা।
                          </div>
                        </div>
                      </button>
                      <div className="mantine-4eewve mantine-Stepper-separator"></div>
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          4
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            কোর্সে এনরোল করার পূর্বে কোর্স সম্পর্কিত যাবতীয় তথ্য
                            আমাদের ওয়েবসাইট থেকে পড়ে নেয়ার অনুরোধ থাকলো। এরপরেও
                            যদি কোন প্রশ্ন থাকে, তাহলে আমাদের{" "}
                            <a
                              className="primary-highlighter"
                              href="https://facebook.com/LetsLearnwithSumit"
                              target="_blank"
                              rel="noreferrer"
                            >
                              ফেসবুক পেজ
                            </a>
                            ,{" "}
                            <a
                              className="primary-highlighter"
                              href="https://facebook.com/groups/learnwithsumit"
                              target="_blank"
                              rel="noreferrer"
                            >
                              গ্রুপ
                            </a>{" "}
                            অথবা সরাসরি সাপোর্ট সেন্টারে যোগাযোগ করুন। সমস্ত
                            যোগাযোগের তথ্য ওয়েবসাইটের ফুটার সেকশনে{" "}
                            <a
                              className="primary-highlighter"
                              href="/contact-us"
                              target="_blank"
                            >
                              যোগাযোগ
                            </a>{" "}
                            লিঙ্কে দেয়া আছে।
                          </div>
                        </div>
                      </button>
                      <div className="mantine-4eewve mantine-Stepper-separator"></div>
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          5
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            এই কোর্সটি একেবারে বিগিনারদের জন্য নয়। কোর্সটি করার
                            জন্য আপনাদের কিছু বিষয় সম্পর্কে ধারণার প্রয়োজন হবে।
                            তাই কোর্সটি এনরোল করার পুর্বে কি কি জানতে হবে সেটি{" "}
                            <a
                              className="primary-highlighter"
                              href="/#prerequisites"
                              target="_blank"
                            >
                              এখান থেকে
                            </a>{" "}
                            নিশ্চিত হয়ে নিন। এছাড়া পরবর্তী ধাপে কিছু কুইজের
                            উত্তর দিয়ে আপনারা আপনাদের প্রয়োজনীয় স্কিল যাচাই করে
                            নিতে পারবেন। যদি আপনি স্কিল টেস্ট দিয়ে আত্মবিশ্বাসী
                            না হয়ে থাকেন, তাহলে কোর্সটি কিনতে আমরা আপনাকে
                            নিরুৎসাহিত করছি।
                          </div>
                        </div>
                      </button>
                      <div className="mantine-4eewve mantine-Stepper-separator"></div>
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          6
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            নির্ধারিত কোর্স ফি এককালীন{" "}
                            <span className="primary-highlighter">
                              1,100 টাকা (এক হাজার একশত টাকা মাত্র)
                            </span>
                            । বাংলাদেশের বাইরে থেকে যারা কোর্স ফি পরিশোধ করবেন
                            (যারা বাংলাদেশি মোবাইল নাম্বার ব্যবহার না করে অন্য
                            মোবাইল নাম্বার ব্যবহার করবেন) তাদের ক্ষেত্রে কোর্স
                            ফি -{" "}
                            <span className="primary-highlighter">
                              1,200 টাকা (এক হাজার দুইশত টাকা মাত্র)
                            </span>
                            । আমরা কোন ধরণেরে ডিস্কাউন্ট অফার করছিনা কারণ আমারা
                            নামমাত্র কোর্স ফি নির্ধারিত করেছি। এ সংক্রান্ত কোন
                            অনুরোধ আমরা রাখতে পারছিনা। এজন্য আন্তরিকভাবে দুঃখ
                            প্রকাশ করছি।
                          </div>
                        </div>
                      </button>
                      <div className="mantine-4eewve mantine-Stepper-separator"></div>
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          7
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            কোর্স এনরোলমেন্ট সফলভাবে শেষ করার জন্য আপনার কিছু
                            ব্যক্তিগত তথ্যের প্রয়োজন পড়বে। এজন্য তিন নম্বর ধাপে
                            প্রয়োজনীয় সকল তথ্য নির্ভুলভাবে প্রদান করুন।
                          </div>
                        </div>
                      </button>
                      <div className="mantine-4eewve mantine-Stepper-separator"></div>
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          8
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            কোর্সের ফি আপনারা আপনাদের পছন্দের পেমেন্ট চ্যানেলের
                            মাধ্যমে পরিশোধ করতে পারবেন। এজন্য চার নম্বর ধাপে
                            যেয়ে পেমেন্ট করার নির্দেশনা অনুসরণ করুন।
                          </div>
                        </div>
                      </button>
                      <div className="mantine-4eewve mantine-Stepper-separator"></div>
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          9
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            কোর্স ফি পরিশোধ করতে গিয়ে কোথাও কারিগরি ত্রুটির
                            সম্মুখীন হলে আমাদের সাপোর্ট সেন্টারে{" "}
                            <a
                              className="primary-highlighter"
                              href="/contact-us"
                              target="_blank"
                            >
                              যোগাযোগ
                            </a>{" "}
                            করতে পারবেন।
                          </div>
                        </div>
                      </button>
                      <div className="mantine-4eewve mantine-Stepper-separator"></div>
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          10
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            আপনি এই কোর্সে এনরোল করছেন মানে হলো আপনি আমাদের
                            কোর্স প্রোগ্রামের{" "}
                            <a
                              className="primary-highlighter"
                              href="/terms"
                              target="_blank"
                            >
                              সকল শর্ত
                            </a>
                            ,{" "}
                            <a
                              className="primary-highlighter"
                              href="/privacy-policy"
                              target="_blank"
                            >
                              প্রাইভেসি পলিসি
                            </a>{" "}
                            এবং{" "}
                            <a
                              className="primary-highlighter"
                              href="/refund-policy"
                              target="_blank"
                            >
                              রিফান্ড পলিসি
                            </a>{" "}
                            মেনে নিয়েই এনরোল করছেন। কোন কনফিউশন থাকলে আবারো
                            শর্তাবলি দেখে নিন।
                          </div>
                        </div>
                      </button>
                      <div className="mantine-4eewve mantine-Stepper-separator"></div>
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          11
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            কোর্স এনরোলমেন্ট করার পর ৭ দিন অতিবাহিত হয়ে গেলে কোন
                            ধরণের কোর্স ফি রিফান্ড রিকুয়েস্ট আর গ্রহণ করা হবেনা।
                            কোর্স এনরোলমেন্ট করার পর ৭ দিনের মধ্যে আপনি আমাদের
                            প্লাটফর্ম থেকে উপযুক্ত কারণ দেখিয়ে রিফান্ড রিকুয়েস্ট
                            করতে পারবেন। রিফান্ড দেয়ার সময় আপনি যে মাধ্যমে
                            পেমেন্ট করেছিলেন, সেই মাধ্যমেই রিফান্ড করার চেষ্টা
                            করা হবে। রিফান্ড করতে গিয়ে সংশ্লিষ্ট মাধ্যমে কোন
                            সার্ভিস চার্জ প্রযোজ্য হলে সেই চার্জ কাস্টোমারকে বহন
                            করতে হবে।
                          </div>
                        </div>
                      </button>
                      <div className="mantine-4eewve mantine-Stepper-separator"></div>
                      <button
                        className="mantine-UnstyledButton-root mantine-Stepper-step mantine-gluoux"
                        type="button"
                        tabIndex="-1"
                      >
                        <div className="__mantine-ref-stepIcon mantine-igkt4i mantine-Stepper-stepIcon">
                          12
                        </div>
                        <div className="mantine-1phcad1 mantine-Stepper-stepBody">
                          <div className="mantine-Text-root mantine-Stepper-stepLabel mantine-ygojka">
                            পরিশেষে কোর্স সংক্রান্ত যেকোন প্রশ্ন থাকলে আমাদের{" "}
                            <a
                              className="primary-highlighter"
                              href="/contact-us"
                              target="_blank"
                            >
                              সাপোর্ট সেন্টারে
                            </a>{" "}
                            যোগাযোগ করার অনুরোধ থাকলো।
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-20">
                  <div className="mantine-Group-root mantine-5nf8ri">
                    <button
                      className="mantine-Button-filled  dark:bg-secondary2 hover:bg-slate-700 dark:hover:bg-secondary1 text-white mantine-Button-root mantine-Group-child mantine-13xrvzk"
                      type="button"
                      onClick={handleVisibleFirst}
                    >
                      <div className="mantine-3xbgk5 mantine-Button-inner">
                        <span className="mantine-qo1k2 mantine-Button-label">
                          শর্তাবলি মেনে পরের ধাপে যেতে চাই
                        </span>
                        <span className="mantine-Button-icon mantine-Button-rightIcon mantine-386jen">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            className="h-5 w-5"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                          </svg>
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeFirst && !activeSecond && (
            <div className="mantine-1erkqyx mantine-Stepper-content">
              <div className="space-y-14 py-14">
                <div>
                  <h1 className="section-title text-center">
                    <span className="primary-highlighter">Registration</span>
                  </h1>
                  <p className="subtitle mx-auto w-full text-center">
                    Please provide accurate information to open an account. This
                    information will be required for logging in later.
                  </p>
                </div>
                <div className="mt-10">
                  <form action="" className="space-y-5">
                    <div className="flex flex-col gap-6 lg:flex-row lg:gap-20">
                      <div className="w-full space-y-6 lg:w-1/2">
                        <div className="mantine-TextInput-root mantine-18aghr7">
                          <label
                            htmlFor="mantine-97qbsb918"
                            className="mantine-4yl2fc mantine-TextInput-label"
                            id="mantine-97qbsb918-label"
                          >
                            Name
                            <span
                              className="mantine-qrh19y mantine-TextInput-required"
                              aria-hidden="true"
                            >
                              {" "}
                              *
                            </span>
                          </label>
                          <div className="mantine-Text-root mantine-TextInput-description mantine-vitztl">
                            The name will be used in all communications.
                            Therefore, please provide the correct name. Kindly
                            refrain from using aliases.
                          </div>
                          <div className="mantine-TextInput-wrapper mantine-12sbrde">
                            <input
                              aria-label="Your full name"
                              placeholder="Universe Boss"
                              id="mantine-97qbsb918"
                              type="text"
                              required=""
                              aria-invalid="false"
                              className="mantine-TextInput-filledVariant dark:bg-slate-800 mantine-TextInput-input mantine-7i89j6"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="mantine-TextInput-root mantine-18aghr7">
                          <label
                            htmlFor="mantine-97qbsb918"
                            className="mantine-4yl2fc mantine-TextInput-label"
                            id="mantine-97qbsb918-label"
                          >
                            Select your gender
                            <span
                              className="mantine-qrh19y mantine-TextInput-required"
                              aria-hidden="true"
                            >
                              *
                            </span>
                          </label>
                          <div className="mantine-Text-root mantine-TextInput-description mantine-vitztl">
                            It will be used for appropriate addressing in all
                            communications.
                          </div>
                          <div className="mantine-TextInput-wrapper mantine-12sbrde">
                            <div className="flex items-center gap-3 text-white">
                              <input
                                className="mantine-byken9 mantine-RadioGroup-radio"
                                type="radio"
                                id="mantine-h6bax2gn5"
                                name="mantine-fbup0183b"
                                value="male"
                              />
                              <div>Female</div>
                              <input
                                className="mantine-byken9 mantine-RadioGroup-radio"
                                type="radio"
                                id="mantine-h6bax2gn5"
                                name="mantine-fbup0183b"
                                value="male"
                              />
                              <div>Male</div>
                            </div>
                          </div>
                        </div>
                        <div className="mantine-TextInput-root mantine-18aghr7">
                          <label
                            htmlFor="mantine-97qbsb918"
                            className="mantine-4yl2fc mantine-TextInput-label"
                            id="mantine-97qbsb918-label"
                          >
                            Emaill Address
                            <span
                              className="mantine-qrh19y mantine-TextInput-required"
                              aria-hidden="true"
                            >
                              {" "}
                              *
                            </span>
                          </label>
                          <div className="mantine-Text-root mantine-TextInput-description mantine-vitztl">
                            All communications will be sent to this email
                            address & it will be your login username. Yahoo
                            email not acceptable!
                          </div>
                          <div className="mantine-TextInput-wrapper mantine-12sbrde">
                            <input
                              aria-label="Your full name"
                              placeholder="boss@gmail.com"
                              id="mantine-97qbsb918"
                              type="text"
                              required=""
                              aria-invalid="false"
                              className="mantine-TextInput-filledVariant dark:bg-slate-800 mantine-TextInput-input mantine-7i89j6"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="mantine-TextInput-root mantine-18aghr7">
                          <label
                            htmlFor="mantine-97qbsb918"
                            className="mantine-4yl2fc mantine-TextInput-label"
                            id="mantine-97qbsb918-label"
                          >
                            Phone Number
                            <span
                              className="mantine-qrh19y mantine-TextInput-required"
                              aria-hidden="true"
                            >
                              {" "}
                              *
                            </span>
                          </label>
                          <div className="mantine-Text-root mantine-TextInput-description mantine-vitztl">
                            All communications will be sent to this email
                            address & it will be your login username. Yahoo
                            email not acceptable!
                          </div>
                          <div className="mantine-TextInput-wrapper mantine-12sbrde">
                            <input
                              placeholder="boss@gmail.com"
                              id="mantine-97qbsb918"
                              type="text"
                              required=""
                              aria-invalid="false"
                              className="mantine-TextInput-filledVariant dark:bg-slate-800 mantine-TextInput-input mantine-7i89j6"
                              value="+880"
                            />
                          </div>
                        </div>
                        <div className="mantine-TextInput-root mantine-18aghr7">
                          <label
                            htmlFor="mantine-97qbsb918"
                            className="mantine-4yl2fc mantine-TextInput-label"
                            id="mantine-97qbsb918-label"
                          >
                            Address
                            <span
                              className="mantine-qrh19y mantine-TextInput-required"
                              aria-hidden="true"
                            >
                              *
                            </span>
                          </label>
                          <div className="mantine-Text-root mantine-TextInput-description mantine-vitztl">
                            All communications will be sent to this email
                            address & it will be your login username. Yahoo
                            email not acceptable!
                          </div>
                          <div className="mantine-TextInput-wrapper mantine-12sbrde">
                            <input
                              placeholder="House 95, 7 JavaScript Avenue, Dhaka, Bangladesh"
                              id="mantine-97qbsb918"
                              type="text"
                              required=""
                              aria-invalid="false"
                              className="mantine-TextInput-filledVariant dark:bg-slate-800 mantine-TextInput-input mantine-7i89j6"
                              value=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-full space-y-6 lg:w-1/2">
                        <div className="flex gap-6">
                          <div className="mantine-Avatar-root border-general border mantine-phlofr">
                            <img
                              className="mantine-1trwvlz mantine-Avatar-image"
                              src={profile}
                              alt="it's me"
                            />
                          </div>
                          <div className="mantine-InputWrapper-root mantine-18aghr7">
                            <label className="mantine-4yl2fc mantine-InputWrapper-label">
                              Please upload a profile picture of yourself.
                            </label>
                            <div className="mantine-Text-root mantine-InputWrapper-description mantine-vitztl">
                              The size of the photo must be less than or equal
                              to 0.5MB, and only images in .jpg, .jpeg, or .png
                              formats are acceptable. We can use this image in
                              our website's course student list.
                            </div>
                            <div className="mantine-Input-wrapper mantine-12sbrde">
                              <input
                                accept=".jpg,.jpeg,.png"
                                type="file"
                                className="mantine-Input-filledVariant border-0 bg-transparent file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-slate-300 hover:file:bg-slate-700 file:-mx-3 text-1 mantine-Input-input mantine-7i89j6"
                                // value="C:\fakepath\103277.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mantine-TextInput-root mantine-18aghr7">
                          <label
                            htmlFor="mantine-97qbsb918"
                            className="mantine-4yl2fc mantine-TextInput-label"
                            id="mantine-97qbsb918-label"
                          >
                            Password
                            <span
                              className="mantine-qrh19y mantine-TextInput-required"
                              aria-hidden="true"
                            >
                              *
                            </span>
                          </label>
                          <div className="mantine-Text-root mantine-TextInput-description mantine-vitztl">
                            The password must be at least 8 characters long and
                            contain at least 1 letter and 1 number.{" "}
                          </div>
                          <div className="mantine-TextInput-wrapper mantine-12sbrde">
                            <input
                              placeholder="Enter strong password "
                              id="mantine-97qbsb918"
                              type="password"
                              required=""
                              aria-invalid="false"
                              className="mantine-TextInput-filledVariant dark:bg-slate-800 mantine-TextInput-input mantine-7i89j6"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="mantine-TextInput-root mantine-18aghr7">
                          <label
                            htmlFor="mantine-97qbsb918"
                            className="mantine-4yl2fc mantine-TextInput-label"
                            id="mantine-97qbsb918-label"
                          >
                            Retype Password
                            <span
                              className="mantine-qrh19y mantine-TextInput-required"
                              aria-hidden="true"
                            >
                              *
                            </span>
                          </label>
                          <div className="mantine-Text-root mantine-TextInput-description mantine-vitztl">
                            This password must match the above password.
                          </div>
                          <div className="mantine-TextInput-wrapper mantine-12sbrde">
                            <input
                              placeholder="Please enter password again"
                              id="mantine-97qbsb918"
                              type="password"
                              required=""
                              aria-invalid="false"
                              className="mantine-TextInput-filledVariant dark:bg-slate-800 mantine-TextInput-input mantine-7i89j6"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="mantine-TextInput-root mantine-18aghr7">
                          <label
                            htmlFor="mantine-97qbsb918"
                            className="mantine-4yl2fc mantine-TextInput-label"
                            id="mantine-97qbsb918-label"
                          >
                            <span
                              className="mantine-qrh19y mantine-TextInput-required"
                              aria-hidden="true"
                            ></span>
                          </label>

                          <div className="mantine-TextInput-wrapper mantine-12sbrde">
                            <input
                              placeholder="Enter strong password minimum 6 character "
                              type="checkbox"
                              required=""
                              aria-invalid="false"
                              value=""
                            />
                            <span className="text-white ml-2">
                              I accept all of the{" "}
                              <span className="text-sky-500">
                                terms and conditions
                              </span>{" "}
                              of the Trace Academy platform, including the{" "}
                              <span className="text-sky-500">
                                privacy policy
                              </span>
                              .
                            </span>
                          </div>
                        </div>
                        <div className="mantine-TextInput-root mantine-18aghr7">
                          <label
                            htmlFor="mantine-97qbsb918"
                            className="mantine-4yl2fc mantine-TextInput-label"
                            id="mantine-97qbsb918-label"
                          >
                            <span
                              className="mantine-qrh19y mantine-TextInput-required"
                              aria-hidden="true"
                            ></span>
                          </label>

                          <div className="pt-4">
                            <div className="mantine-Group-root mantine-cztxf9">
                              <button
                                className="mantine-Button-filled  bg-sky-500 hover:bg-sky-700 dark:hover:bg-secondary1 text-white mantine-Button-root mantine-Group-child mantine-13xrvzk"
                                type="submit"
                                disabled=""
                              >
                                <div className="mantine-3xbgk5 mantine-Button-inner">
                                  <span className="mantine-qo1k2 mantine-Button-label">
                                    Submit
                                  </span>
                                  <span className="mantine-Button-icon mantine-Button-rightIcon mantine-386jen">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 1024 1024"
                                      className="h-5 w-5"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                                    </svg>
                                  </span>
                                </div>
                              </button>
                            </div>
                            <div className="mt-3 text-xs text-slate-600">
                              ** You cannot submit your information until your
                              mobile number is verified.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Enroll;
