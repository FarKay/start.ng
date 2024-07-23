function App() {
  return (
    <div>
      <div className="m-auto h-screen w-[1440px] bg-[#F4FFFE] font-sans">
        <div className="flex flex-col text-stone-50 lg:h-[700px] lg:bg-custom-image lg:bg-cover lg:bg-no-repeat">
          <div>
            <div className="relative mx-auto flex items-center justify-between px-[100px] lg:top-[50px] lg:h-[45px]">
              <span className="lg:relative lg:h-[45px] lg:w-[128px] lg:text-[30px] lg:font-extrabold lg:leading-[45px]">
                Start<span className="text-[#2D9993]">.ng</span>
              </span>
              <div className="lg:h-[30px] lg:w-[587px]">
                <ul className="flex items-center justify-between">
                  <li className="text-[#2D9993] lg:text-[20px] lg:font-medium lg:leading-[30px]">
                    <a href="home">Home</a>
                  </li>
                  <li className="text-[#FFFFFF] lg:text-[20px] lg:font-medium lg:leading-[30px]">
                    <a href="about">About</a>
                  </li>
                  <li className="text-[#FFFFFF] lg:text-[20px] lg:font-medium lg:leading-[30px]">
                    <a href="benefit">Benefit</a>
                  </li>
                  <li className="text-[#FFFFFF] lg:text-[20px] lg:font-medium lg:leading-[30px]">
                    <a href="curriculum">Curriculum</a>
                  </li>
                  <li className="text-[#FFFFFF] lg:text-[20px] lg:font-medium lg:leading-[30px]">
                    <a href="contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative left-[406px] top-[237px] flex h-[297px] w-[628px] flex-col items-center justify-center">
              <div className="flex flex-col">
                <h1 className="lg:text-center lg:text-[50px] lg:font-bold lg:leading-[65px]">
                  The right step to up start your{" "}
                  <span className="capitalize lg:text-[#2FE0CC]">
                    tech skills
                  </span>
                </h1>
                <p className="py-5 text-[#FFFFFF] lg:text-center lg:text-[20px] lg:font-semibold lg:leading-[27px]">
                  Learn with us and reach a perfect new height in tech
                </p>
              </div>
              <div className="lg:py-10">
                <button className="flex items-center justify-center rounded-[5px] bg-[#EA5E5E] text-center text-[#FFFFFF] lg:h-[60px] lg:w-[187px] lg:text-[20px] lg:font-bold lg:leading-10">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center bg-[#2D9993] lg:h-[140px]">
          <div className="flex items-center justify-around lg:h-[49.97px] lg:w-[923px]">
            <div>
              <img src="hotels.svg" alt="hotels-logo" />
            </div>
            <div>
              <img src="piggyvestLogo.svg" alt="piggyvest-logo" />
            </div>
            <div>
              <img src="flutterwave.svg" alt="flutterwave-logo" />
            </div>
            <div>
              <img src="chatdesk.svg" alt="chatdesk-logo" />
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-[1fr_auto] items-center lg:mx-auto lg:my-20 lg:h-[512px] lg:w-[1240px] lg:gap-20">
            <div className="lg:h-[512px] lg:w-[736px]">
              <img src="about-us.svg" alt="a-table-with-a-cup-of-coffee" />
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <span className="capitalize lg:text-[40px] lg:font-bold lg:leading-[60px]">
                  About us
                </span>
                <div className="bg-[#27E0CC] lg:h-[5px] lg:w-[85px]"></div>
              </div>
              <span className="lg:h-[150px] lg:w-[400px] lg:pr-3 lg:text-[20px] lg:font-normal lg:leading-[30px]">
                Start.ng offers the best on hands practice in the world of
                programming. The training is for complete beginners who want to
                learn the basics of software development.
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-[40px] lg:left-[100px] lg:h-[573px] lg:w-[1596px]">
          <div>
            <div>
              <span className="capitalize text-[#333333] lg:w-[374px] lg:text-[40px] lg:font-bold lg:leading-[60px]">
                Available courses
              </span>
              <div className="bg-[#27E0CC] lg:mb-10 lg:mt-2 lg:h-[5px] lg:w-[85px]"></div>
            </div>

            <div className="flex flex-row gap-24 lg:h-[338px] lg:w-[1596px]">
              <div className="lg:h-[338px] lg:w-[336px]">
                <div className="rounded-bl-[5px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[5px] bg-white lg:h-[338px] lg:w-[336px] lg:p-[26px]">
                  <div className="flex flex-col gap-6 lg:h-[275px] lg:w-[246px]">
                    <div className="relative bg-[url('/ellipse.png')] bg-contain bg-no-repeat lg:h-[100px] lg:w-[100px]">
                      <div className="relative mx-auto my-6 flex flex-col p-0 lg:h-[48.44px] lg:w-[48.44px]">
                        <img src="vector.png" />
                        <img src="arrow-down.png" />
                        <img src="arrow-down.png" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                      <div className="text-[24px] font-semibold uppercase leading-[40px] text-[#333333]">
                        Html
                      </div>
                      <div className="text-[20px] font-normal leading-[30px] text-[#333333]">
                        This FREE course will teach you how to design a web page
                        using HTML.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:h-[338px] lg:w-[336px]">
                <div className="rounded-bl-[5px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[5px] bg-white lg:h-[338px] lg:w-[336px] lg:p-5">
                  <div className="flex flex-col gap-6 lg:h-[275px] lg:w-[246px]">
                    <div className="relative bg-[url('/ellipse.png')] bg-contain bg-no-repeat lg:h-[100px] lg:w-[100px]">
                      <div className="relative mx-auto my-6 flex flex-col p-0 lg:h-[48.44px] lg:w-[48.44px]">
                        <img src="vector.png" />
                        <img src="arrow-down.png" />
                        <img src="arrow-down.png" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                      <div className="text-[24px] font-semibold uppercase leading-[40px] text-[#333333]">
                        Php
                      </div>
                      <div className="text-[20px] font-normal leading-[30px] text-[#333333]">
                        Learn the most widely used web programming language!
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:h-[338px] lg:w-[336px]">
                <div className="rounded-bl-[5px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[5px] bg-white lg:h-[338px] lg:w-[336px] lg:p-5">
                  <div className="flex flex-col gap-6 lg:h-[275px] lg:w-[246px]">
                    <div className="relative bg-[url('/ellipse.png')] bg-contain bg-no-repeat lg:h-[100px] lg:w-[100px]">
                      <div className="relative mx-auto my-6 flex flex-col p-0 lg:h-[48.44px] lg:w-[48.44px]">
                        <img src="vector.png" />
                        <img src="arrow-down.png" />
                        <img src="arrow-down.png" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[20px] lg:h-[145px] lg:w-[284px]">
                      <div className="text-[24px] font-semibold uppercase leading-[40px] text-[#333333]">
                        Javascript
                      </div>
                      <div className="text-[20px] font-normal leading-[30px] text-[#333333]">
                        Basic features of JavaScript, including making your
                        website more interactive,
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:h-[338px] lg:w-[336px]">
                <div className="rounded-bl-[5px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[5px] bg-white lg:h-[338px] lg:w-[336px] lg:p-5">
                  <div className="flex flex-col gap-6 lg:h-[275px] lg:w-[246px]">
                    <div className="relative bg-[url('/ellipse.png')] bg-contain bg-no-repeat lg:h-[100px] lg:w-[100px]">
                      <div className="relative mx-auto my-6 flex flex-col p-0 lg:h-[48.44px] lg:w-[48.44px]">
                        <img src="vector.png" />
                        <img src="arrow-down.png" />
                        <img src="arrow-down.png" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[20px] lg:h-[145px] lg:w-[246px]">
                      <div className="text-[24px] font-semibold uppercase leading-[40px] text-[#333333]">
                        Javascript
                      </div>
                      <div className="text-[20px] font-normal leading-[30px] text-[#333333]">
                        Sed ut perspiciatis unde omnis iste natus error sit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative left-[1100px]">
            <button className="bg-[#EA5E5E] text-[#FFFFFF] lg:h-[60px] lg:w-[187px] lg:rounded-[5px] lg:text-[20px] lg:font-bold lg:leading-[30px]">
              Explore courses
            </button>
          </div>
        </div>

        <div>
          <div className="mx-auto my-20 grid grid-cols-[1fr_auto] items-center gap-10 lg:h-[512px] lg:w-[1240px]">
            <div className="flex flex-col gap-14">
              <div className="w-[146px] text-[37px] font-bold leading-[55.5px] text-[#333333]">
                Mission
                <div className="my-5 bg-[#27E0CC] lg:h-[5px] lg:w-[85px]"></div>
              </div>
              <div className="h-[221px] w-[400px] text-[20px] font-normal leading-[31.5px] text-[#333333]">
                Our focus for this training is the complete beginners. The
                curriculum is designed to train you as though you have no idea
                what HTML means. We believe everyone should begin their software
                journey from the easiest entry point, basic web languages.
              </div>
            </div>
            <div>
              <img src="mission.jpg" alt="a-lady-studying" />
            </div>
          </div>
        </div>

        <div className="pb-[100px]">
          <div className="relative left-[100px] flex flex-col gap-[30px] lg:h-[549px] lg:w-[1372px]">
            <div className="flex h-[439px] w-[1372px] flex-col">
              <div className="">
                <div className="lg:text-[40px] lg:font-bold lg:leading-[60px] lg:text-[#333333]">
                  Starting Mentors
                </div>
                <div className="mb-10 bg-[#27E0CC] lg:h-[5px] lg:w-[85px]"></div>
              </div>

              <div className="flex flex-row lg:h-[314px] lg:w-[1372px] lg:gap-28">
                <div>
                  <div className="lg:h-[314px] lg:w-[280px]">
                    <div className="rounded-bl-[5px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[5px] bg-[#FFFFFF] p-10 lg:h-[314px] lg:w-[280px]">
                      <div className="lg:h-[140px] lg:w-[140px]">
                        <img src="profile-image.jpg" alt="profile-picture" />
                      </div>
                      <div className="flex flex-col gap-3 py-10 lg:h-[67px] lg:w-[177px]">
                        <div className="text-[20px] font-normal leading-[30px] text-[#333333]">
                          Joan Miguel
                        </div>
                        <div className="text-[18px] font-normal leading-[27px] text-[#828282]">
                          Frontend developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="lg:h-[314px] lg:w-[280px]">
                    <div className="rounded-bl-[5px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[5px] bg-[#FFFFFF] p-10 lg:h-[314px] lg:w-[280px]">
                      <div className="lg:h-[140px] lg:w-[140px]">
                        <img src="profile-image.jpg" alt="profile-picture" />
                      </div>
                      <div className="flex flex-col gap-3 py-10 lg:h-[67px] lg:w-[177px]">
                        <div className="text-[20px] font-normal leading-[30px] text-[#333333]">
                          Joan Miguel
                        </div>
                        <div className="text-[18px] font-normal leading-[27px] text-[#828282]">
                          Frontend developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="lg:h-[314px] lg:w-[280px]">
                    <div className="rounded-bl-[5px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[5px] bg-[#FFFFFF] p-10 lg:h-[314px] lg:w-[280px]">
                      <div className="lg:h-[140px] lg:w-[140px]">
                        <img src="profile-image.jpg" alt="profile-picture" />
                      </div>
                      <div className="flex flex-col gap-3 py-10 lg:h-[67px] lg:w-[177px]">
                        <div className="text-[20px] font-normal leading-[30px] text-[#333333]">
                          Joan Miguel
                        </div>
                        <div className="text-[18px] font-normal leading-[27px] text-[#828282]">
                          Frontend developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="lg:h-[314px] lg:w-[280px]">
                    <div className="rounded-bl-[5px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[5px] bg-[#FFFFFF] p-10 lg:h-[314px] lg:w-[280px]">
                      <div className="lg:h-[140px] lg:w-[140px]">
                        <img src="profile-image.jpg" alt="profile-picture" />
                      </div>
                      <div className="flex flex-col gap-3 py-10 lg:h-[67px] lg:w-[177px]">
                        <div className="text-[20px] font-normal leading-[30px] text-[#333333]">
                          Joan Miguel
                        </div>
                        <div className="text-[18px] font-normal leading-[27px] text-[#828282]">
                          Frontend developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center lg:left-[1100px]">
              <button className="bg-[#EA5E5E] text-[#FFFFFF] lg:h-[60px] lg:w-[187px] lg:rounded-[5px] lg:text-[20px] lg:font-bold lg:leading-[30px]">
                View all
              </button>
            </div>
          </div>
        </div>

        <div className="h-[572px] bg-[#2D9993] p-[30px]">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-[30px]">
              <div className="text-[37px] font-bold leading-[55.5px] text-[#FFFFFF]">
                Meet the Finalist
              </div>
              <div className="mt-[10px] bg-[#27E0CC] lg:h-[5px] lg:w-[85px]"></div>
            </div>

            <div className="my-[30px] flex flex-col items-center gap-[20px]">
              <div className="flex flex-col items-center gap-[10px]">
                <div className="h-[101px] w-[101px] rounded-full">
                  <img src="pp.png" alt="a picture" />
                </div>
                <div className="w-[525px] text-center text-[20px] font-light italic leading-[30px] text-[#E0E0E0]">
                  Startdotng is a wonderful platform for anyone beginning or
                  furthering a career in the tech industry and we can’t wait to
                  start the main internship.
                </div>
              </div>
              <div className="text-[#FFFFFF]">
                <div className="text-[20px] font-normal leading-[27.5px]">
                  Faydeemee, Web developer
                </div>
                <div className="text-center text-[18px] font-light leading-[27px]">
                  Startng 2.0
                </div>
              </div>
            </div>

            <div className="my-[30px] flex flex-row items-center justify-between gap-[20px]">
              <div>
                <img src="ellipse-1.png" alt="white-circle" />
              </div>
              <div className="mx-3">
                <img src="ellipse-2.png" alt="white-circle" />
              </div>
              <div>
                <img src="ellipse-3.png" alt="white-circle" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[50px] p-[100px]">
          <div className="flex flex-row justify-between gap-[30px]">
            <span className="text-[36px] font-extrabold leading-[54px]">
              Start<span className="text-[#2D9993]">.ng</span>
            </span>
            <div className="flex flex-row gap-[30px]">
              <div className="flex w-[200px] flex-col gap-[10px]">
                <span className="text-[20px] font-semibold leading-[30px]">
                  Quick Links
                </span>
                <ul className="flex flex-col text-[18px] font-normal leading-[27px] text-[#333333]">
                  <li>
                    <a href="home">Home</a>
                  </li>
                  <li>
                    <a href="about">About</a>
                  </li>
                  <li>
                    <a href="benefit">Benefit</a>
                  </li>
                  <li>
                    <a href="curriculum">Curriculum Intern</a>
                  </li>
                </ul>
              </div>
              <div className="flex w-[200px] flex-col gap-[10px]">
                <span className="text-[20px] font-semibold leading-[30px]">
                  Office Address
                </span>
                <div className="flex flex-col text-[18px] font-normal leading-[27px] text-[#333333]">
                  <span>3 Birrel Avenue,</span>
                  <span>Sabo.</span>
                  <span>Yaba, Lagos State, Nigeria</span>
                </div>
              </div>
              <div className="flex w-[200px] flex-col gap-[10px]">
                <span className="text-[20px] font-semibold leading-[30px]">
                  Contact Us
                </span>
                <div className="flex flex-col gap-1 text-[18px] font-normal leading-[27px] text-[#333333]">
                  <span> +234 714 805 1613</span>
                  <span>startng@info.com</span>
                </div>
              </div>
              <div className="flex w-[200px] flex-col gap-[10px]">
                <span className="text-[20px] font-semibold leading-[30px]">
                  Follow Us
                </span>
                <div className="flex flex-row items-center gap-3">
                  <div>
                    <img src="facebook.png" alt="facebook-logo" />
                  </div>
                  <div className="">
                    <img src="instagram.png" alt="facebook-logo" />
                  </div>
                  <div>
                    <img src="twitter.png" alt="facebook-logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="text-center text-[14px] font-normal leading-[21px] text-[#C4C4C4]">
            Copyright © 2020 All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
