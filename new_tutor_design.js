// NEW TUTOR DESIGN START
try {
  if (userRole === "Contractor") {
    const IS_CANADA_OR_USA =
      userBranch === "Tutorax - Canada" || userBranch === "Tutorax - USA" || userBranch === "Tutorax Administration" ? true : false;

    let tutorContactPersonList = {
      "Tutorax - Tutorat": { name: "Florence", email: "florence@tutorax.com", phone: "514-612-2362" },
      "Tutorax - Stimulation du langage": { name: "Alice", email: "alice@tutorax.com", phone: "514-900-3718" },
      "Tutorax - Canada": { name: "Alexandra", email: "alexandra@tutorax.com", phone: "647-558-0317" },
      "Tutorax - Orthopedagogie": { name: "Maryse", email: "maryse@tutorax.com", phone: "514-612-0159" },
      "Tutorax - USA": { name: "Jennifer Miller", email: "jennifer@tutorax.com", phone: "786-265-0905" },
      "Tutorax - Orthophonie": { name: "Alice", email: "alice@tutorax.com", phone: "514-900-3718" },
      "Tutorax Administration": { name: "Florence_test", email: "florence_test@tutorax.com", phone: "514-612-2362" },
    };

    let contactPerson = tutorContactPersonList[userBranch];

    const SELECTORS = {
      originalBranchBanner: "#originalBranchBanner",
      newTutorDesignKillSwitch: "#newTutorDesignKillSwitch",
      newTutorNavigationMegaMenu: "#new_tutor_navigation_mega_menu",
      newTutorNavigationAccordionMenu: "#new_tutor_navigation_accordion_menu",
      navbarRight: ".navbar-right",
      menuAccordion: "#menu_accordion",
      acc: ".new_tutor_dashboard_acc_menu_accordion",
      qualificationsContainer: ".tcc-qualifications",
      teachingSkillsContainer: IS_CANADA_OR_USA ? ".tcc-teaching-skills" : ".tcc-matieres-niveaux-scolaires",
      tabs: ".role-nav-tabs.nav.nav-tabs.tab-scroll",
      menuDashboardButton: IS_CANADA_OR_USA ? "#menu-dashboard" : "#menu-tableau-de-bord",
      menuAvailableJobsTag: IS_CANADA_OR_USA ? "#menu-available-jobs" : "#menu-tutorats-disponibles",
      docsItem: IS_CANADA_OR_USA ? "#menu-documents" : "#menu-mes-eleves",
      addLessonItem: IS_CANADA_OR_USA ? "#menu-my-jobs" : "#menu-mes-eleves",
      contentHeader: ".content-header",
      addZoomBtn: 'a[href="/provider/zoom/"]',
      paymentDiv: ".payment-details",
      menuPaymentOrders: IS_CANADA_OR_USA ? "#menu-payment-orders" : "#menu-paiements",
      accountingBanner: "#accountingBanner",
      currentApplicationsBanner: "#currentApplicationsBanner",
      menuCurrentApplications: IS_CANADA_OR_USA ? "#menu-current-applications" : "#menu-applications-actuelles",
      carouselElement: ".custom-carousel",
      carouselInner: ".custom-carousel-inner",
      slides: ".custom-carousel-slide",
      prevButton: ".custom-carousel-button.prev",
      nextButton: ".custom-carousel-button.next",
      controlsContainer: ".custom-carousel-controls",
      noBankDetailsBanner: "#noBankDetailsBanner",
      noBankDetailsBannerAddBtn: "#noBankDetailsBannerAddBtn",
      paymentDetails: ".payment-details",
      pageLogo: ".logo",
      pageOverlay: "#full-overlay",
      emailMailToButton: "#email_mailto_button",
      profileDetails: ".item-extra.profile-details",
      variableContent: "#variable-content",
      accountingBannerBtn: "#accountingBannerBtn",
    };

    const ROUTES = {
      SERVICE: "/cal/con/service/",
      MENU_PAYMENT_ORDERS: "/accounting/pos/raised/",
      MENU_CURRENT_APPLICATIONS: "/cal/tenders",
      PROFILE: "/accounts/profile/",
      DASHBOARD_PROFILE: "/profile/",
    };

    const TEXT_TEMPLATES = {
      SUPPORT_24_7: IS_CANADA_OR_USA ? "24/7 Support" : "Support 24/7",
      MY_STUDENTS: IS_CANADA_OR_USA ? "My students" : "Mes élèves",
      AVAILABLE_JOBS: IS_CANADA_OR_USA ? "Available jobs" : "Mandats disponibles",
      WHAT_WOULD_YOU_LIKE_TO_DO: IS_CANADA_OR_USA ? "What do you want to do today ?" : "Que voulez-vous faire aujourd'hui ?",
      GET_NEW_STUDENT: IS_CANADA_OR_USA ? "Get a new student" : "Obtenir un nouvel élève",
      CONTACT_PERSON: IS_CANADA_OR_USA ? "Contact person" : "Personne-ressource",
      SEND_EMAIL: IS_CANADA_OR_USA ? "Send an email" : "Envoyer un courriel",
      TUTOR_PHONE_LINE: IS_CANADA_OR_USA ? "Tutor's phone line" : "Ligne téléphonique des tuteurs",
    };

    // Core Utilities
    function getElement(selector) {
      return document.querySelector(selector);
    }

    function getAllElement(selector) {
      return document.querySelectorAll(selector);
    }

    function isCurrentPage(route) {
      return window.location.href.includes(route);
    }

    function setNavigationMenuByScreenWidth() {
      let newTutorNavigationMegaMenu = getElement(SELECTORS.newTutorNavigationMegaMenu);
      let newTutorNavigationAccordionMenu = getElement(SELECTORS.newTutorNavigationAccordionMenu);
      if (!newTutorNavigationMegaMenu || !newTutorNavigationAccordionMenu) {
        return;
      }
      if (window.innerWidth > 750) {
        newTutorNavigationMegaMenu.style.display = "block";
        newTutorNavigationAccordionMenu.style.display = "none";
      }
      if (window.innerWidth <= 750) {
        newTutorNavigationMegaMenu.style.display = "none";
        newTutorNavigationAccordionMenu.style.display = "block";
      }
    }
    function hideMegaMenus() {
      let newTutorNavigationMegaMenu = getElement(SELECTORS.newTutorNavigationMegaMenu);
      let newTutorNavigationAccordionMenu = getElement(SELECTORS.newTutorNavigationAccordionMenu);
      if (newTutorNavigationMegaMenu) {
        newTutorNavigationMegaMenu.style.display = "none";
      }
      if (newTutorNavigationAccordionMenu) {
        newTutorNavigationAccordionMenu.style.display = "none";
      }
    }
    function addAvailableButtonTopRight() {
      let navbarRight = getElement(SELECTORS.navbarRight);
      if (!navbarRight) {
        return;
      }
      let supportBtn = document.createElement("button");
      supportBtn.setAttribute("style", "background-color:#fff;border:none;padding:5px 8px;border-radius:5px;margin-right:1rem;");
      supportBtn.setAttribute("id", "navBarAvailableSupportBtn");
      // supportBtn.textContent = "Support 24/7";
      supportBtn.innerHTML = `<span class='fa fa-headset'></span>&nbsp;${TEXT_TEMPLATES.SUPPORT_24_7}`;
      navbarRight.insertBefore(supportBtn, navbarRight?.children[1]);
    }

    function addAvailableSupportButtonSideBar() {
      let menuAccordion = getElement(SELECTORS.menuAccordion);
      if (!menuAccordion) {
        return;
      }
      let supportBtn = document.createElement("button");
      let supportBtnContainer = document.createElement("div");
      supportBtnContainer.setAttribute("style", "display:flex;justify-content:center;align-items:center;margin:1rem 0;");
      supportBtn.setAttribute(
        "style",
        "width:95%;font-size:0.9rem;background-color: rgb(255, 255, 255); border: none; padding: 8px 0px; border-radius: 5px; display: inline-block;"
      );
      supportBtn.setAttribute("id", "sideBarAvailableSupportBtn");
      // supportBtn.textContent = "Support 24/7";
      supportBtn.innerHTML = `<span class='fa fa-headset'></span>&nbsp;${TEXT_TEMPLATES.SUPPORT_24_7}`;
      supportBtnContainer.appendChild(supportBtn);
      menuAccordion.appendChild(supportBtnContainer);
    }
    function createAvailableButtons() {
      addAvailableButtonTopRight();
      addAvailableSupportButtonSideBar();
    }
    function showButtonById(btnId) {
      let btn = document.getElementById(btnId);
      if (btn) {
        btn.style.display = "inline-block";
      }
    }
    function hideButtonById(btnId) {
      let btn = document.getElementById(btnId);
      if (btn) {
        btn.style.display = "none";
      }
    }
    function setSupportAvailableBtn() {
      if (window.innerWidth >= 576) {
        hideButtonById("sideBarAvailableSupportBtn");
        showButtonById("navBarAvailableSupportBtn");
      }
      if (window.innerWidth < 576) {
        hideButtonById("navBarAvailableSupportBtn");
        showButtonById("sideBarAvailableSupportBtn");
      }
    }
    function removeTutorBannerAlertClasses() {
      let newTutorNavigationMegaMenu = getElement(SELECTORS.newTutorNavigationMegaMenu);
      if (!newTutorNavigationMegaMenu || !newTutorNavigationMegaMenu.parentElement) {
        return;
      }
      if (newTutorNavigationMegaMenu.parentElement.classList.contains("alert")) {
        newTutorNavigationMegaMenu.parentElement.classList.remove("alert");
      }
      if (newTutorNavigationMegaMenu.parentElement.classList.contains("alert-info")) {
        newTutorNavigationMegaMenu.parentElement.classList.remove("alert-info");
      }
    }

    function removeDocsItem() {
      let docsItem = getElement(SELECTORS.docsItem);
      if (!docsItem) {
        return;
      }
      docsItem?.remove();
    }
    function removeZoomItem() {
      let addZoomBtn = getElement(SELECTORS.addZoomBtn);
      if (!addZoomBtn) {
        return;
      }
      addZoomBtn.remove();
    }
    function changeAddLessonTitle() {
      let addLessonItem = getElement(SELECTORS.addLessonItem);
      if (!addLessonItem) {
        return;
      }
      addLessonItem.innerHTML = `<span class="fas fa-bolt fa-fw"></span>&nbsp;${TEXT_TEMPLATES.MY_STUDENTS}\n    \n  `;
    }
    function changeCurrentJobsOrder() {
      let menuAccordion = getElement(SELECTORS.menuAccordion);
      let menuAvailableJobsTag = getElement(SELECTORS.menuAvailableJobsTag);
      let menuDashboardButton = getElement(SELECTORS.menuDashboardButton);
      if (!menuAccordion || !menuAvailableJobsTag || !menuDashboardButton) {
        return;
      }
      menuAccordion.insertBefore(menuAvailableJobsTag, menuDashboardButton);
    }
    function changeAvailableJobsIconAndParentColor() {
      let menuAvailableJobsTag = getElement(SELECTORS.menuAvailableJobsTag);
      if (!menuAvailableJobsTag) {
        return;
      }
      menuAvailableJobsTag.setAttribute("style", "color:#fff;background-color:#3a749e;");
      menuAvailableJobsTag.innerHTML = `<span class="fas fa-mouse-pointer fa-fw"></span>&nbsp;${TEXT_TEMPLATES.AVAILABLE_JOBS}\n    \n  `;
    }
    function removeOriginalBanner() {
      let originalBranchBanner = getElement(SELECTORS.originalBranchBanner);
      if (!originalBranchBanner || !originalBranchBanner?.parentElement || originalBranchBanner?.parentElement?.classList?.length === 0) {
        return;
      }
      originalBranchBanner?.parentElement?.classList?.remove("alert");
      originalBranchBanner?.parentElement?.classList?.remove("alert-info");
    }
    function topBannerSetup() {
      let carouselElement = getElement(SELECTORS.carouselElement);
      let carouselInner = getElement(SELECTORS.carouselInner);
      let prevButton = getElement(SELECTORS.prevButton);
      let nextButton = getElement(SELECTORS.nextButton);
      let slides = getAllElement(SELECTORS.slides);
      if (!carouselElement || !carouselInner || !prevButton || !nextButton || !slides || slides.length === 0) {
        return;
      }
      if (!carouselElement.getAttribute("rendered") && carouselElement.getAttribute("rendered") !== "true") {
        carouselElement.setAttribute("rendered", "true");

        if (carouselElement.getAttribute("show") === "true") {
          carouselElement.style.display = "block";

          if (slides.length <= 1) {
            const controls = document.querySelector(".custom-carousel-controls");
            if (controls) {
              controls.remove();
            }
            return;
          }

          let currentIndex = 1; // Start at 1 due to prepended clone
          let isAnimating = false; // Click-lock mechanism

          // Clone first and last slides
          const firstSlide = slides[0].cloneNode(true);
          const lastSlide = slides[slides.length - 1].cloneNode(true);

          carouselInner.appendChild(firstSlide);
          carouselInner.insertBefore(lastSlide, slides[0]);

          // Update dimensions and initial position
          //const allSlides = document.querySelectorAll(".custom-carousel-slide");
          //carouselInner.style.width = `${allSlides.length * 100}%`;
          carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

          // Generate dots for each real slide
          const controlsContainer = document.querySelector(".custom-carousel-controls");
          const createDots = () => {
            slides.forEach((_, index) => {
              const dot = document.createElement("span");
              dot.className = "custom-carousel-control";
              dot.style = `
      width: 7px;
      height: 7px;
      background: ${index === 0 ? "black" : "grey"};
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.3s;
    `;
              dot.dataset.slide = index + 1; // Match currentIndex offset
              controlsContainer.insertBefore(dot, nextButton);
            });
          };

          createDots();

          const dots = document.querySelectorAll(".custom-carousel-control");

          const updateDots = () => {
            dots.forEach((dot, index) => {
              const realIndex = (currentIndex - 1 + slides.length) % slides.length;
              dot.style.background = index === realIndex ? "black" : "grey";
            });
          };

          const updateCarousel = () => {
            isAnimating = true; // Lock clicks
            carouselInner.style.transition = "transform 0.5s ease-in-out";
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Unlock clicks after transition
            carouselInner.addEventListener(
              "transitionend",
              () => {
                isAnimating = false; // Unlock clicks
              },
              { once: true }
            );
          };

          const resetPosition = () => {
            carouselInner.style.transition = "none";
            if (currentIndex === 0) {
              currentIndex = slides.length;
            } else if (currentIndex === slides.length + 1) {
              currentIndex = 1;
            }
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
          };

          const handleNavigation = (direction) => {
            if (isAnimating) return; // Prevent multiple clicks
            currentIndex += direction;
            updateCarousel();
            carouselInner.addEventListener("transitionend", resetPosition, { once: true });
          };

          prevButton.addEventListener("click", () => handleNavigation(-1));
          nextButton.addEventListener("click", () => handleNavigation(1));
        } else {
          carouselElement.style.display = "none";
          console.warn("Carousel is hidden because the 'show' attribute is not set to true.");
        }
      }
    }
    function insertBannerIfBankDetailsNotMentioned() {
      let noBankDetailsBanner = getElement(SELECTORS.noBankDetailsBanner);
      if (!noBankDetailsBanner) {
        return;
      }
      noBankDetailsBanner.style.display = "block";
      let noBankDetailsBannerAddBtn = getElement(SELECTORS.noBankDetailsBannerAddBtn);
      if (!noBankDetailsBannerAddBtn) {
        return;
      }
      let addBtnReplacer = noBankDetailsBannerAddBtn.cloneNode(true);
      if (addBtnReplacer) {
        addBtnReplacer.addEventListener("click", () => {
          let originalBankDetailsAddBtn = document.querySelector(`[data-title="Add Bank Details"]`);
          if (originalBankDetailsAddBtn) {
            originalBankDetailsAddBtn.click();
          }
        });
        noBankDetailsBannerAddBtn.parentNode.replaceChild(addBtnReplacer, noBankDetailsBannerAddBtn);
      }
    }
    function setTopBannerOrPaymentBanner() {
      // topBannerSetup();
      let paymentDetails = getElement(SELECTORS.paymentDetails);
      if (!paymentDetails) {
        topBannerSetup();
        return;
      }
      let paymentDetailsBody = paymentDetails.querySelector(".card-body");
      if (!paymentDetailsBody) {
        topBannerSetup();
        return;
      }
      if (paymentDetailsBody?.children?.[0]?.tagName != "P") {
        topBannerSetup();
        return;
      }
      insertBannerIfBankDetailsNotMentioned();
    }
    function removeDashboardNavigationTabs() {
      let tabs = getElement(SELECTORS.tabs);
      if (!tabs) {
        return;
      }
      tabs.remove();
    }
    function setAccordionMenuClickEvents() {
      let acc = getAllElement(SELECTORS.acc);
      if (!acc || acc.length === 0) {
        return;
      }
      acc.forEach((item) => {
        item.addEventListener("click", function () {
          this.classList.toggle("new_tutor_dashboard_acc_menu_active");
          let panel = this.nextElementSibling;
          panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";

          acc.forEach((otherItem) => {
            if (this !== otherItem) {
              otherItem.classList.remove("new_tutor_dashboard_acc_menu_active");
              otherItem.nextElementSibling.style.maxHeight = null;
            }
          });
        });
      });
    }
    function makeTeachingSkillsFullWidthAndRemoveQualificationsBox() {
      let qualificationsContainer = getElement(SELECTORS.qualificationsContainer);
      let teachingSkillsContainer = getElement(SELECTORS.teachingSkillsContainer);
      if (qualificationsContainer) {
        qualificationsContainer.parentElement.remove();
      }
      if (teachingSkillsContainer) {
        teachingSkillsContainer.parentElement.setAttribute("class", "col-12 p-lg-3");
      }
    }
    function addTwoNewDashboardSections() {
      // let paymentDiv = getElement(SELECTORS.paymentDiv);
      // if (!paymentDiv) {
      //   return;
      // }
      let profileDetails = getElement(SELECTORS.profileDetails);
      if (!profileDetails) {
        return;
      }
      let sectionsHtml = `<div class="row w-100 mx-auto mt-5">
                                  <div class="col-12 col-lg-6 pr-lg-2">
                                  <div class="card custom-card-v2 tcc-uploaded-documents mb-3">
                                    <div class="custom-card-inner">
                                      <div class="card-header p-0">
                                        <h2 class="card-title">${TEXT_TEMPLATES.WHAT_WOULD_YOU_LIKE_TO_DO}</h2>
                                      </div>
                                      <div class="card-body">
                                        <p class="m-0 pt-2">
                                          <a href="#" id="goToJobsLinkBtn">${TEXT_TEMPLATES.GET_NEW_STUDENT}</a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                  <div class="col-12 col-lg-6 pl-lg-2">
                                  <div class="card custom-card-v2 tcc-uploaded-documents mb-3">
                                    <div class="custom-card-inner p-0">
                                      <div class="card-header p-2">
                                        <h2 class="card-title m-0">${TEXT_TEMPLATES.CONTACT_PERSON}</h2>
  
                                      </div>
                                      <div class="card-header py-2 d-flex justify-content-between align-items-center">
                                        <p class="m-0">${contactPerson?.name}</p>
                                        <p class="btn action-btn py-1" data-toggle="crud-modal" id="email_mailto_button">
                                          <span class="fas fa-regular fa-envelope"></span>&nbsp;${TEXT_TEMPLATES.SEND_EMAIL}
                                        </p>
                                      </div>
                                      <div class="card-header py-2 d-flex justify-content-between align-items-center border-bottom-0">
                                        <p class="m-0">${TEXT_TEMPLATES.TUTOR_PHONE_LINE}</p>
                                        <p class="m-0">${contactPerson?.phone}</p>
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                  </div>`;
      if (!document.getElementById("goToJobsLinkBtn")) {
        profileDetails.children[1].children[0].insertAdjacentHTML("beforebegin", sectionsHtml);
        // paymentDiv.parentElement.insertAdjacentHTML("beforebegin", sectionsHtml);
      }
    }
    function handleGetNewStudentEvent() {
      let goToJobsLinkBtn = document.getElementById("goToJobsLinkBtn");
      let menuAvailableJobsTag = getElement(SELECTORS.menuAvailableJobsTag);
      if (!goToJobsLinkBtn || !menuAvailableJobsTag) {
        return;
      }
      goToJobsLinkBtn.addEventListener("click", (e) => {
        e.preventDefault();
        menuAvailableJobsTag.click();
      });
    }

    async function getProfileData() {
      const response = await fetch(ROUTES.PROFILE, { method: "GET" });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const rawText = await response?.text();
      const parser = new DOMParser();
      const rawHtml = parser.parseFromString(rawText, "text/html");

      const firstNameTag = rawHtml.querySelector("#id_first_name");
      const lastNameTag = rawHtml.querySelector("#id_last_name");
      const emailTag = rawHtml.querySelector("#id_user_email");
      const phoneTag = rawHtml.querySelector("#id_phone");

      return {
        firstName: firstNameTag?.value?.trim() ?? "",
        lastName: lastNameTag?.value?.trim() ?? "",
        email: emailTag?.value?.trim() ?? "",
        phone: phoneTag?.value?.trim() ?? "",
      };
    }

    function mapBranchNameToId(branchName) {
      const branches = {
        "Tutorax - Tutorat": 3268,
        "Tutorax - Stimulation du langage": 5737,
        "Tutorax - Canada": 7673,
        "Tutorax - Orthopedagogie": 8427,
        "Tutorax - USA": 15751,
        "Tutorax Administration": 3269,
      };

      return branches[branchName] ?? null;
    }

    async function addRedirectToErrorFormEvent() {
      let accountingBannerBtn = getElement(SELECTORS.accountingBannerBtn);
      if (!accountingBannerBtn) {
        return;
      }
      try {
        let data = await getProfileData();
        if (!data) {
          return;
        }
        let branchId = mapBranchNameToId(userBranch);
        accountingBannerBtn.addEventListener("click", () => {
          let errorDeclarationFormURL = IS_CANADA_OR_USA
            ? `https://secure.tutorax.com/payment-error-declaration/?firstName=${data.firstName}&lastName=${data.lastName}&email=${data.email}&phoneNumber=${data.phone}&branch=${branchId}`
            : `https://secure.tutorax.com/declaration-erreur-paiement/?prenom=${data.firstName}&nom=${data.lastName}&courriel=${data.email}&numeroTelephone=${data.phone}&branch=${branchId}`;
          window.open(errorDeclarationFormURL, "_self").focus();
        });
      } catch (error) {
        console.error("Error setting up redirect:", error);
      }
    }

    function addTutorCssToPage() {
      let customTutorCssTag = getElement(SELECTORS.customTutorCssTag);
      if (customTutorCssTag) {
        return;
      }
      let style = document.createElement("style");
      style.setAttribute("id", "customTutorCssTag");
      style.innerHTML = `
  .custom-carousel * {
      font-family: Arial, Helvetica, sans-serif;
    }
  
    @media only screen and (max-width: 1130px) {
      .tutorBannerImage {
        display: none;
      }
      .textContainer {
        padding: 1rem 0 0 0 !important;
        display: flex !important;
        justify-content: start !important;
        align-items: center !important;
        flex-direction: column !important;
        margin: 0 auto !important;
      }
      .textContainer p {
        margin-bottom: 0 !important;
        text-align: center !important;
      }
    }
    @media only screen and (max-width: 450px) {
      .textContainer p {
        display: none !important;
      }
      .textContainer h3 {
        text-align: center !important;
        margin-bottom: 1rem !important;
      }
    }
        `;
      document.head.appendChild(style);
    }

    async function globalAllPagesFunctionsMain() {
      removeOriginalBanner();
      addTutorCssToPage();
      let newTutorDesignKillSwitch = getElement(SELECTORS.newTutorDesignKillSwitch);
      if (!newTutorDesignKillSwitch) {
        return;
      }
      let killSwitchShowAttribute = newTutorDesignKillSwitch.getAttribute("show") ?? "false";
      if (killSwitchShowAttribute === "false") {
        return;
      }
      let ORIGINAL_BRANCH_BANNER = document.getElementById("originalBranchBanner");
      if (ORIGINAL_BRANCH_BANNER) {
        ORIGINAL_BRANCH_BANNER.remove();
      }
      removeTutorBannerAlertClasses();
      let isCurrentPageDashboard = window.location.pathname === "/";

      if (isCurrentPageDashboard) {
        let variableContent = getElement(SELECTORS.variableContent);
        if (!variableContent) {
          return;
        }
        variableContent.style.visibility = "hidden";
        // window.location = "/profile";
        let tabs = getElement(SELECTORS.tabs);
        if (tabs && tabs.children?.[2]?.firstElementChild) {
          tabs.children[2].firstElementChild.click();
        }
      }

      changeCurrentJobsOrder();
      changeAvailableJobsIconAndParentColor();
      removeDocsItem();
      removeZoomItem();
      changeAddLessonTitle();
      let menuPaymentOrders = getElement(SELECTORS.menuPaymentOrders);
      let isPageMenuPaymentOrders = isCurrentPage(ROUTES.MENU_PAYMENT_ORDERS);
      let accountingBanner = getElement(SELECTORS.accountingBanner);

      if (menuPaymentOrders && isPageMenuPaymentOrders && accountingBanner) {
        accountingBanner.style.display = "block";
        addRedirectToErrorFormEvent();
      }

      let menuCurrentApplications = getElement(SELECTORS.menuCurrentApplications);
      let isPageCurrentApplications = isCurrentPage(ROUTES.MENU_CURRENT_APPLICATIONS);
      let currentApplicationsBanner = getElement(SELECTORS.currentApplicationsBanner);

      if (menuCurrentApplications && isPageCurrentApplications && currentApplicationsBanner) {
        currentApplicationsBanner.style.display = "block";
      }
      // currentApplicationsBanner
      let menuDashboardButton = getElement(SELECTORS.menuDashboardButton);
      if (menuDashboardButton) {
        menuDashboardButton.setAttribute("href", "https://app.tutorax.com/profile");
      }

      let pageLogo = getElement(SELECTORS.pageLogo);
      if (pageLogo) {
        pageLogo.setAttribute("href", "https://app.tutorax.com/profile");
      }

      let isCurrentPageDashboardProfile = isCurrentPage(ROUTES.DASHBOARD_PROFILE);
      if (isCurrentPageDashboardProfile && !window.location.pathname.includes("accounts")) {
        let menuDashboardButton = getElement(SELECTORS.menuDashboardButton);
        if (menuDashboardButton) {
          menuDashboardButton.classList.add("active");
        }
        setTopBannerOrPaymentBanner();
        addTwoNewDashboardSections();
        handleGetNewStudentEvent();
        removeDashboardNavigationTabs();
        makeTeachingSkillsFullWidthAndRemoveQualificationsBox();
        setAccordionMenuClickEvents();
        setNavigationMenuByScreenWidth();
        window.addEventListener("resize", () => {
          if (window.location.pathname === "/profile/") {
            setNavigationMenuByScreenWidth();
          } else {
            hideMegaMenus();
          }
        });
        let emailMailToButton = getElement(SELECTORS.emailMailToButton);
        if (!emailMailToButton) {
          return;
        }
        emailMailToButton.addEventListener("click", () => {
          let mailTo = document.createElement("a");
          mailTo.setAttribute("href", `mailto:${contactPerson?.email}`);
          mailTo.click();
          let overLay = getElement(SELECTORS.pageOverlay);
          if (!overLay) {
            return;
          }
          setTimeout(() => {
            overLay.removeAttribute("style");
          }, 1000);
        });
      }
      if (!isCurrentPageDashboardProfile || window.location.pathname.includes("accounts")) {
        hideMegaMenus();
      }
      if (!document.getElementById("navBarAvailableSupportBtn") && !document.getElementById("sideBarAvailableSupportBtn")) {
        createAvailableButtons();
        setSupportAvailableBtn();
        window.addEventListener("resize", () => {
          setSupportAvailableBtn();
        });
      }
    }

    // Main Method

    globalAllPagesFunctionsMain();
  }
} catch (newTutorDashboardError) {
  console.log("### new design error start ###");
  console.error(newTutorDashboardError);
  console.log("### new design error end ###");
}
// NEW TUTOR DESIGN END
