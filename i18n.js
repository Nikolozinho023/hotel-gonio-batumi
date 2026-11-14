/* ============================================================
   HOTEL GONIO BATUMI — Translations (EN · KA · RU)

   How it works:
   - English text lives in the HTML. The `en` block below is only a
     fallback (for empty elements) and the source for JS messages.
   - KA / RU: if a key is missing, the HTML text is shown (never the key).
   - {n}, {max}, {phone}, {email} are filled in by main.js.
   - NOTE: i18n-fix.js loads AFTER this file, so any key that also
     exists there wins.
   ============================================================ */

window.FCGI18N = {
  /* ══════════════════════════════════════════════════
     ENGLISH
  ══════════════════════════════════════════════════ */
  en: {
    /* Nav */
    nav_home: "Home",
    nav_suites: "Rooms",
    nav_about: "About",
    nav_facilities: "Facilities",
    nav_gallery: "Gallery",
    nav_location: "Location",
    nav_contact: "Contact",
    nav_book_now: "Book Now",

    /* Hero */
    hero_badge: "Batumi · Georgia",
    hero_eyebrow: "Hotel · Black Sea Coast",
    hero_title_1: "HOTEL GONIO",
    hero_title_2: "BATUMI",
    hero_sub:
      "A comfortable hotel in Batumi, 300 m from the sea and 50 m from the boulevard. Breakfast is included.",
    hero_cta_book: "Reserve Your Stay",
    hero_cta_disc: "Discover the Hotel",
    hero_scroll: "Scroll",

    /* Rooms section (home) */
    suites_accent: "Accommodations",
    suites_h1: "Comfortable Rooms",
    suites_sub:
      "Simple, comfortable rooms with a sea view, a private shower and breakfast included.",
    rooms_h1: "Comfortable Rooms",
    btn_book_room: "Book This Room",
    btn_details: "Details",
    from_label: "From",
    per_night: "per night",
    rm_view_all: "View All Rooms",

    /* Room names / badges */
    rm_lux: "Lux Double",
    rm_std_double: "Standard Double",
    rm_std_twin: "Standard Twin",
    rm_std_single: "Standard Single",
    rm_badge_lux: "Lux",
    rm_badge_std: "Standard",

    /* Beds / guests */
    rm_bed_double: "1 double bed",
    rm_bed_twin: "2 single beds",
    rm_bed_single: "1 single bed",
    rm_guests_2: "2 guests",
    rm_guests_1: "1 guest",

    /* Room descriptions */
    rm_desc_lux:
      "A bright double room with a sea view. One double bed, a private shower, a fridge and fast internet. Breakfast is included.",
    rm_desc_std_double:
      "A comfortable double room with a sea view. One double bed, a private shower, a fridge and fast internet. Breakfast is included.",
    rm_desc_std_twin:
      "A room with two single beds, good for friends or colleagues. A private shower, a fridge, a sea view and fast internet. Breakfast is included.",
    rm_desc_std_single:
      "A cosy room for one guest with a single bed. A private shower, a fridge, a sea view and fast internet. Breakfast is included.",

    /* Home-page meta lines */
    rm_meta_lux: "21 m² · 1 double bed · 2 guests",
    rm_meta_std_double: "25 m² · 1 double bed · 2 guests",
    rm_meta_std_twin: "21 m² · 2 single beds · 2 guests",

    /* Amenities */
    am_wifi: "High-speed internet",
    am_shower: "Private shower",
    am_fridge: "In-room fridge",
    am_sea: "Sea view",
    am_concierge: "24/7 concierge",
    am_robes: "Robes & slippers",

    /* Suites page: price + filters */
    rm_from: "From",
    rm_night: "per night",
    rf_all: "All Rooms ({n})",
    rf_double: "Double",
    rf_twin: "Twin",
    rf_single: "Single",

    /* Suites page: header */
    sp_accent: "Our Rooms",
    sp_h1: "Rooms",
    sp_tagline: "Simple, comfortable rooms with a sea view.",
    sp_p: "Four room types, all with a private shower, an in-room fridge, high-speed internet and a sea view. Breakfast is included.",
    sp_horizons: "Sea View",
    sp_terraces: "Breakfast Included",
    filter_cta: "Not sure which room to pick? Contact us.",

    /* Facilities */
    fac_eyebrow: "Facilities & Location",
    fac_eyebrow2: "Facilities",
    fac_title: "Everything you need for a comfortable stay",
    fac_intro:
      "A simple, well-located hotel 300 m from the sea. Breakfast is included, and the boulevard is just 50 m away.",
    fac_t1: "Breakfast included",
    fac_d1: "Served every morning in our sea-view restaurant.",
    fac_tag_inc: "Included",
    fac_t2: "Panoramic restaurant",
    fac_d2: "Large windows with views of the sea and Batumi Boulevard.",
    fac_t3: "Reception & lounge",
    fac_d3: "Friendly front desk and a comfortable seating area.",
    fac_t4: "Private bathroom",
    fac_d4: "Shower, hairdryer, toiletries and fresh towels.",
    fac_t5: "Free Wi-Fi",
    fac_d5: "Internet in rooms and common areas.",
    fac_near_eyebrow: "Location",
    fac_near_title: "Perfectly placed",
    fac_n1_v: "300 m",
    fac_n1: "to the Black Sea",
    fac_n2_v: "50 m",
    fac_n2: "to Batumi New Boulevard",
    fac_n3_v: "Nearby",
    fac_n3: "Metro City Mall",
    fac_wa: "Ask us on WhatsApp",

    /* Gallery */
    gal_accent: "Gallery",
    gal_h1: "Take a Look Inside",
    gal_more: "View More Of Us",
    gal_modal_title: "Full Gallery",

    /* Location */
    loc_hotel_name: "Hotel Gonio Batumi",
    loc_address: "Sherif Khimshiashvili St. 59, Batumi, Adjara, Georgia",
    loc_directions: "Get Directions",

    /* CTA / Contact */
    cta_accent: "Book Your Stay",
    cta_h1: "Reserve Your Room",
    cta_p: "Send us your dates and we will confirm availability and price.",
    cta_reserve: "Make a Reservation",
    cta_email: "hotelgoniobatumi@gmail.com",
    ct_accent: "Contact",
    ct_h1: "Get in Touch",
    ct_p: "Call us, write an email, or send your dates through the booking form and we will confirm availability and price.",

    /* Footer */
    footer_desc:
      "A comfortable hotel in Batumi, Georgia, close to the sea and the boulevard. Breakfast is included.",
    footer_nav: "Navigation",
    footer_contact: "Contact",
    footer_copy: "© 2026 Hotel Gonio Batumi. All rights reserved.",
    footer_rights: "Hotel Gonio Batumi. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Stay",
    footer_imprint: "Imprint",
    footer_instagram: "Instagram",
    footer_facebook: "Facebook",

    /* Logo */
    logo_name: "Hotel Gonio Batumi",
    logo_name_full: "Hotel Gonio Batumi",

    /* Booking modal */
    modal_eyebrow: "Hotel Gonio Batumi Reservation",
    modal_title: "Request Your Stay",
    modal_subtitle:
      "We will check availability and contact you to confirm your booking.",
    field_name: "Guest Full Name",
    field_phone: "Contact Phone",
    field_email: "Email Address",
    field_checkin: "Check-In Date",
    field_checkout: "Check-Out Date",
    field_adults: "Adults",
    field_children: "Children",
    field_room: "Room Type",
    field_notes: "Special Requests or Arrival Notes",
    notes_ph: "Arrival time, special requests...",
    btn_submit: "Submit Reservation Request",
    loading_msg: "Sending your request…",
    success_badge: "Request Received",
    success_title: "Your request is with our team",
    success_p:
      "Thank you! We will contact you shortly to confirm availability and the details of your stay.",
    btn_close: "Close",
    adults_1: "1 Adult",
    adults_2: "2 Adults",
    adults_3: "3 Adults",
    adults_4: "4 Adults",
    children_0: "0 Children",
    children_1: "1 Child",
    children_2: "2 Children",

    /* Form messages (used by main.js) */
    err_dates: "Check-out date must be after check-in date.",
    err_past: "Check-in date cannot be in the past.",
    err_phone: "Please enter a valid phone number.",
    err_guests: "This room accommodates up to {max} guests.",
    err_send:
      "We could not send your request. Please try again or call {phone}.",
    err_no_service:
      "We opened your email app with the request filled in — press Send to finish. If nothing opened, write to {email} or call {phone}.",

    /* Room details popup */
    det_badge: "Room Details",
    det_area_label: "Room Size",
    det_bed_label: "Beds",
    det_amenities: "In the Room",
    det_proceed: "Proceed to Reservation",

    /* Why section */
    why_eyebrow: "THE HOTEL EXPERIENCE",
    why_heading_main: "Why Choose",
    why_heading_span: "Hotel Gonio Batumi?",
    why_desc:
      "Discover a welcoming place to stay, where comfort, a great location and the warmth of Georgian hospitality come together.",
    why_f1_title: "A Great Location",
    why_f1_desc: "300 m from the sea and 50 m from Batumi New Boulevard.",
    why_f2_title: "Comfort in Every Detail",
    why_f2_desc:
      "Thoughtfully designed accommodation focused on making every stay comfortable.",
    why_f3_title: "Georgian Hospitality",
    why_f3_desc:
      "A warm welcome inspired by Georgia's long-standing tradition of hospitality.",
    why_f4_title: "Thoughtful Service",
    why_f4_desc:
      "Attentive care and a welcoming atmosphere throughout your stay.",
    why_subtitle: "A PLACE TO FEEL AT HOME",

    /* Nav link descriptions */
    nav_link_suites: "Rooms",
    nav_link_fac: "Facilities",
    nav_link_gal: "Gallery",
    nav_link_loc: "Location",
    nav_link_about: "About",
  },

  /* ══════════════════════════════════════════════════
     GEORGIAN — ქართული  (needs native review)
  ══════════════════════════════════════════════════ */
  ka: {
    nav_home: "მთავარი",
    nav_suites: "ნომრები",
    nav_about: "ჩვენ შესახებ",
    nav_facilities: "სერვისები",
    nav_gallery: "გალერეა",
    nav_location: "მდებარეობა",
    nav_contact: "კონტაქტი",
    nav_book_now: "დაჯავშნა",

    hero_badge: "ბათუმი · საქართველო",
    hero_eyebrow: "სასტუმრო · შავი ზღვის სანაპირო",
    hero_title_1: "HOTEL GONIO",
    hero_title_2: "BATUMI",
    hero_sub:
      "კომფორტული სასტუმრო ბათუმში, ზღვიდან 300 მ-ში და ბულვარიდან 50 მ-ში. საუზმე შედის ფასში.",
    hero_cta_book: "დაჯავშნეთ ნომერი",
    hero_cta_disc: "გაიცანით სასტუმრო",
    hero_scroll: "გადაახვიეთ",

    suites_accent: "განთავსება",
    suites_h1: "კომფორტული ნომრები",
    suites_sub:
      "მარტივი და კომფორტული ნომრები ზღვის ხედით, პირადი საშხაპით და საუზმით.",
    rooms_h1: "კომფორტული ნომრები",
    btn_book_room: "დაჯავშნა",
    btn_details: "დეტალები",
    from_label: "დან",
    per_night: "ღამეში",
    rm_view_all: "ყველა ნომრის ნახვა",

    rm_lux: "ლუქს ორადგილიანი",
    rm_std_double: "სტანდარტული ორადგილიანი",
    rm_std_twin: "სტანდარტული ტვინი",
    rm_std_single: "სტანდარტული ერთადგილიანი",
    rm_badge_lux: "ლუქსი",
    rm_badge_std: "სტანდარტი",

    rm_bed_double: "1 ორადგილიანი საწოლი",
    rm_bed_twin: "2 ცალკე საწოლი",
    rm_bed_single: "1 ერთადგილიანი საწოლი",
    rm_guests_2: "2 სტუმარი",
    rm_guests_1: "1 სტუმარი",

    rm_desc_lux:
      "ნათელი ორადგილიანი ნომერი ზღვის ხედით. ერთი ორადგილიანი საწოლი, პირადი საშხაპე, მაცივარი და სწრაფი ინტერნეტი. საუზმე შედის ფასში.",
    rm_desc_std_double:
      "კომფორტული ორადგილიანი ნომერი ზღვის ხედით. ერთი ორადგილიანი საწოლი, პირადი საშხაპე, მაცივარი და სწრაფი ინტერნეტი. საუზმე შედის ფასში.",
    rm_desc_std_twin:
      "ნომერი ორი ცალკე საწოლით, შესაფერისია მეგობრებისთვის ან კოლეგებისთვის. პირადი საშხაპე, მაცივარი, ზღვის ხედი და სწრაფი ინტერნეტი. საუზმე შედის ფასში.",
    rm_desc_std_single:
      "მყუდრო ნომერი ერთი სტუმრისთვის, ერთი საწოლით. პირადი საშხაპე, მაცივარი, ზღვის ხედი და სწრაფი ინტერნეტი. საუზმე შედის ფასში.",

    rm_meta_lux: "21 მ² · 1 ორადგილიანი საწოლი · 2 სტუმარი",
    rm_meta_std_double: "25 მ² · 1 ორადგილიანი საწოლი · 2 სტუმარი",
    rm_meta_std_twin: "21 მ² · 2 ცალკე საწოლი · 2 სტუმარი",

    am_wifi: "მაღალსიჩქარიანი ინტერნეტი",
    am_shower: "პირადი საშხაპე",
    am_fridge: "მაცივარი ნომერში",
    am_sea: "ზღვის ხედი",
    am_concierge: "კონსიერჟი 24/7",
    am_robes: "ხალათი და ჩუსტები",

    rm_from: "დან",
    rm_night: "ღამეში",
    rf_all: "ყველა ნომერი ({n})",
    rf_double: "ორადგილიანი",
    rf_twin: "ტვინი",
    rf_single: "ერთადგილიანი",

    sp_accent: "ჩვენი ნომრები",
    sp_h1: "ნომრები",
    sp_tagline: "მარტივი და კომფორტული ნომრები ზღვის ხედით.",
    sp_p: "ოთხი ტიპის ნომერი, ყველაში პირადი საშხაპე, მაცივარი, მაღალსიჩქარიანი ინტერნეტი და ზღვის ხედი. საუზმე შედის ფასში.",
    sp_horizons: "ზღვის ხედი",
    sp_terraces: "საუზმე შედის ფასში",
    filter_cta: "არ იცით რომელი ნომერი აირჩიოთ? დაგვიკავშირდით.",

    fac_eyebrow: "სერვისები და მდებარეობა",
    fac_eyebrow2: "სერვისები",
    fac_title: "ყველაფერი კომფორტული დასვენებისთვის",
    fac_intro:
      "მარტივი და კარგად განლაგებული სასტუმრო ზღვიდან 300 მეტრში. საუზმე შედის ღირებულებაში, ბულვარი კი სულ 50 მეტრშია.",
    fac_t1: "საუზმე შედის ფასში",
    fac_d1: "ყოველ დილით, ზღვის ხედიან რესტორანში.",
    fac_tag_inc: "შედის ფასში",
    fac_t2: "პანორამული რესტორანი",
    fac_d2: "დიდი ფანჯრები ზღვისა და ბათუმის ბულვარის ხედით.",
    fac_t3: "რეგისტრატურა და ლაუნჯი",
    fac_d3: "მეგობრული მომსახურება და კომფორტული დასასვენებელი ზონა.",
    fac_t4: "ინდივიდუალური სააბაზანო",
    fac_d4: "საშხაპე, ფენი, ჰიგიენური საშუალებები და სუფთა პირსახოცები.",
    fac_t5: "უფასო Wi-Fi",
    fac_d5: "ინტერნეტი ოთახებსა და საერთო სივრცეებში.",
    fac_near_eyebrow: "მდებარეობა",
    fac_near_title: "იდეალური მდებარეობა",
    fac_n1_v: "300 მ",
    fac_n1: "შავ ზღვამდე",
    fac_n2_v: "50 მ",
    fac_n2: "ბათუმის ახალ ბულვარამდე",
    fac_n3_v: "ახლოს",
    fac_n3: "მეტრო სითი მოლი",
    fac_wa: "მოგვწერეთ WhatsApp-ში",

    gal_accent: "გალერეა",
    gal_h1: "დაათვალიერეთ სასტუმრო",
    gal_more: "მეტის ნახვა",
    gal_modal_title: "სრული გალერეა",

    loc_hotel_name: "Hotel Gonio Batumi",
    loc_address: "შერიფ ხიმშიაშვილის ქ. 59, ბათუმი, აჭარა, საქართველო",
    loc_directions: "მარშრუტის ნახვა",

    cta_accent: "დაჯავშნეთ დასვენება",
    cta_h1: "დაჯავშნეთ თქვენი ნომერი",
    cta_p: "გამოგვიგზავნეთ თარიღები და დაგიდასტურებთ ხელმისაწვდომობას და ფასს.",
    cta_reserve: "დაჯავშნა",
    cta_email: "hotelgoniobatumi@gmail.com",
    ct_accent: "კონტაქტი",
    ct_h1: "დაგვიკავშირდით",
    ct_p: "დაგვირეკეთ, მოგვწერეთ ელფოსტაზე ან გამოგვიგზავნეთ თარიღები ჯავშნის ფორმით და დაგიდასტურებთ ხელმისაწვდომობას და ფასს.",

    footer_desc:
      "კომფორტული სასტუმრო ბათუმში, ზღვასა და ბულვართან ახლოს. საუზმე შედის ფასში.",
    footer_nav: "ნავიგაცია",
    footer_contact: "კონტაქტი",
    footer_copy: "© 2026 Hotel Gonio Batumi. ყველა უფლება დაცულია.",
    footer_rights: "Hotel Gonio Batumi. ყველა უფლება დაცულია.",
    footer_privacy: "კონფიდენციალურობის პოლიტიკა",
    footer_terms: "ყოფნის პირობები",
    footer_imprint: "იურიდიული ინფორმაცია",
    footer_instagram: "Instagram",
    footer_facebook: "Facebook",

    logo_name: "Hotel Gonio Batumi",
    logo_name_full: "Hotel Gonio Batumi",

    modal_eyebrow: "Hotel Gonio Batumi · ჯავშანი",
    modal_title: "მოითხოვეთ ნომერი",
    modal_subtitle:
      "ჩვენ გადავამოწმებთ ხელმისაწვდომობას და დაგიკავშირდებით ჯავშნის დასადასტურებლად.",
    field_name: "სტუმრის სრული სახელი",
    field_phone: "საკონტაქტო ტელეფონი",
    field_email: "ელ-ფოსტა",
    field_checkin: "ჩამოსვლის თარიღი",
    field_checkout: "გამგზავრების თარიღი",
    field_adults: "ზრდასრულები",
    field_children: "ბავშვები",
    field_room: "ნომრის ტიპი",
    field_notes: "განსაკუთრებული მოთხოვნები",
    notes_ph: "ჩამოსვლის დრო, განსაკუთრებული მოთხოვნები...",
    btn_submit: "ჯავშნის გაგზავნა",
    loading_msg: "მოთხოვნა იგზავნება…",
    success_badge: "მოთხოვნა მიღებულია",
    success_title: "თქვენი მოთხოვნა ჩვენს გუნდთანაა",
    success_p:
      "გმადლობთ! მალე დაგიკავშირდებით ხელმისაწვდომობისა და დეტალების დასადასტურებლად.",
    btn_close: "დახურვა",
    adults_1: "1 ზრდასრული",
    adults_2: "2 ზრდასრული",
    adults_3: "3 ზრდასრული",
    adults_4: "4 ზრდასრული",
    children_0: "0 ბავშვი",
    children_1: "1 ბავშვი",
    children_2: "2 ბავშვი",

    err_dates: "გამგზავრების თარიღი უნდა იყოს ჩამოსვლის თარიღის შემდეგ.",
    err_past: "ჩამოსვლის თარიღი წარსულში ვერ იქნება.",
    err_phone: "გთხოვთ, მიუთითოთ სწორი ტელეფონის ნომერი.",
    err_guests: "ამ ნომერში მაქსიმუმ {max} სტუმარი თავსდება.",
    err_send:
      "მოთხოვნის გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან ან დაგვირეკეთ: {phone}.",
    err_no_service:
      "ელფოსტის პროგრამა გაიხსნა მზა მოთხოვნით — დასასრულებლად დააჭირეთ გაგზავნას. თუ არაფერი გაიხსნა, მოგვწერეთ {email} ან დაგვირეკეთ {phone}.",

    det_badge: "ნომრის დეტალები",
    det_area_label: "ნომრის ფართობი",
    det_bed_label: "საწოლები",
    det_amenities: "ნომერში",
    det_proceed: "ჯავშნის გაგრძელება",

    why_eyebrow: "სასტუმროს გამოცდილება",
    why_heading_main: "რატომ აირჩიოთ",
    why_heading_span: "Hotel Gonio Batumi?",
    why_desc:
      "აღმოაჩინეთ კომფორტული გარემო, სადაც კომფორტი, კარგი მდებარეობა და ქართული სტუმართმოყვარეობა ერთად გხვდებათ.",
    why_f1_title: "კარგი მდებარეობა",
    why_f1_desc: "ზღვამდე 300 მ და ბათუმის ახალ ბულვარამდე 50 მ.",
    why_f2_title: "კომფორტი თითოეულ დეტალში",
    why_f2_desc:
      "გულდასმით შექმნილი განთავსება, რომელიც ყოველ ვიზიტს კომფორტულს ხდის.",
    why_f3_title: "ქართული სტუმართმოყვარეობა",
    why_f3_desc:
      "თბილი მიღება, ქართული ტრადიციული სტუმართმოყვარეობის შთაგონებით.",
    why_f4_title: "ყურადღებიანი სერვისი",
    why_f4_desc: "ყურადღებიანი მომსახურება და სტუმართმოყვარე გარემო.",
    why_subtitle: "სახლივით გაგრძნობინებთ",

    nav_link_suites: "ნომრები",
    nav_link_fac: "სერვისები",
    nav_link_gal: "გალერეა",
    nav_link_loc: "მდებარეობა",
    nav_link_about: "ჩვენ შესახებ",

    /* Used only as a fallback in the Details popup */
    phrases: {
      "Lux Double": "ლუქს ორადგილიანი",
      "Standard Double": "სტანდარტული ორადგილიანი",
      "Standard Twin": "სტანდარტული ტვინი",
      "Standard Single": "სტანდარტული ერთადგილიანი",
      "1 double bed": "1 ორადგილიანი საწოლი",
      "2 single beds": "2 ცალკე საწოლი",
      "1 single bed": "1 ერთადგილიანი საწოლი",
      "High-speed internet": "მაღალსიჩქარიანი ინტერნეტი",
      "Private shower": "პირადი საშხაპე",
      "In-room fridge": "მაცივარი ნომერში",
      "Sea view": "ზღვის ხედი",
      "24/7 concierge": "კონსიერჟი 24/7",
      "Robes & Slippers": "ხალათი და ჩუსტები",
      "Robes &amp; Slippers": "ხალათი და ჩუსტები",
    },
  },

  /* ══════════════════════════════════════════════════
     RUSSIAN — Русский  (needs native review)
  ══════════════════════════════════════════════════ */
  ru: {
    nav_home: "Главная",
    nav_suites: "Номера",
    nav_about: "О нас",
    nav_facilities: "Удобства",
    nav_gallery: "Галерея",
    nav_location: "Расположение",
    nav_contact: "Контакты",
    nav_book_now: "Забронировать",

    hero_badge: "Батуми · Грузия",
    hero_eyebrow: "Отель · Побережье Чёрного моря",
    hero_title_1: "HOTEL GONIO",
    hero_title_2: "BATUMI",
    hero_sub:
      "Комфортный отель в Батуми, в 300 м от моря и в 50 м от бульвара. Завтрак включён.",
    hero_cta_book: "Забронировать номер",
    hero_cta_disc: "Узнать об отеле",
    hero_scroll: "Листать",

    suites_accent: "Размещение",
    suites_h1: "Комфортные номера",
    suites_sub:
      "Простые и уютные номера с видом на море, собственным душем и завтраком.",
    rooms_h1: "Комфортные номера",
    btn_book_room: "Забронировать",
    btn_details: "Подробнее",
    from_label: "От",
    per_night: "за ночь",
    rm_view_all: "Все номера",

    rm_lux: "Двухместный люкс",
    rm_std_double: "Стандарт с двуспальной кроватью",
    rm_std_twin: "Стандарт с двумя кроватями",
    rm_std_single: "Стандарт одноместный",
    rm_badge_lux: "Люкс",
    rm_badge_std: "Стандарт",

    rm_bed_double: "1 двуспальная кровать",
    rm_bed_twin: "2 односпальные кровати",
    rm_bed_single: "1 односпальная кровать",
    rm_guests_2: "2 гостя",
    rm_guests_1: "1 гость",

    rm_desc_lux:
      "Светлый двухместный номер с видом на море. Одна двуспальная кровать, собственный душ, холодильник и быстрый интернет. Завтрак включён.",
    rm_desc_std_double:
      "Уютный двухместный номер с видом на море. Одна двуспальная кровать, собственный душ, холодильник и быстрый интернет. Завтрак включён.",
    rm_desc_std_twin:
      "Номер с двумя односпальными кроватями, подходит для друзей или коллег. Собственный душ, холодильник, вид на море и быстрый интернет. Завтрак включён.",
    rm_desc_std_single:
      "Уютный номер для одного гостя с односпальной кроватью. Собственный душ, холодильник, вид на море и быстрый интернет. Завтрак включён.",

    rm_meta_lux: "21 м² · 1 двуспальная кровать · 2 гостя",
    rm_meta_std_double: "25 м² · 1 двуспальная кровать · 2 гостя",
    rm_meta_std_twin: "21 м² · 2 односпальные кровати · 2 гостя",

    am_wifi: "Высокоскоростной интернет",
    am_shower: "Собственный душ",
    am_fridge: "Холодильник в номере",
    am_sea: "Вид на море",
    am_concierge: "Консьерж 24/7",
    am_robes: "Халат и тапочки",

    rm_from: "От",
    rm_night: "за ночь",
    rf_all: "Все номера ({n})",
    rf_double: "Double",
    rf_twin: "Twin",
    rf_single: "Single",

    sp_accent: "Наши номера",
    sp_h1: "Номера",
    sp_tagline: "Простые и уютные номера с видом на море.",
    sp_p: "Четыре типа номеров, во всех — собственный душ, холодильник, высокоскоростной интернет и вид на море. Завтрак включён.",
    sp_horizons: "Вид на море",
    sp_terraces: "Завтрак включён",
    filter_cta: "Не знаете, какой номер выбрать? Свяжитесь с нами.",

    fac_eyebrow: "Услуги и расположение",
    fac_eyebrow2: "Удобства",
    fac_title: "Всё для комфортного отдыха",
    fac_intro:
      "Простой отель в удобном месте, в 300 м от моря. Завтрак включён в стоимость, а бульвар всего в 50 м.",
    fac_t1: "Завтрак включён",
    fac_d1: "Каждое утро в ресторане с видом на море.",
    fac_tag_inc: "Включено",
    fac_t2: "Панорамный ресторан",
    fac_d2: "Большие окна с видом на море и Батумский бульвар.",
    fac_t3: "Ресепшен и лаунж",
    fac_d3: "Приветливая стойка регистрации и уютная зона отдыха.",
    fac_t4: "Собственная ванная",
    fac_d4: "Душ, фен, туалетные принадлежности и свежие полотенца.",
    fac_t5: "Бесплатный Wi-Fi",
    fac_d5: "Интернет в номерах и общих зонах.",
    fac_near_eyebrow: "Расположение",
    fac_near_title: "Идеальное расположение",
    fac_n1_v: "300 м",
    fac_n1: "до Чёрного моря",
    fac_n2_v: "50 м",
    fac_n2: "до Нового бульвара Батуми",
    fac_n3_v: "Рядом",
    fac_n3: "торговый центр Metro City",
    fac_wa: "Написать в WhatsApp",

    gal_accent: "Галерея",
    gal_h1: "Осмотрите отель",
    gal_more: "Смотреть больше",
    gal_modal_title: "Вся галерея",

    loc_hotel_name: "Hotel Gonio Batumi",
    loc_address: "ул. Шерифа Химшиашвили, 59, Батуми, Аджария, Грузия",
    loc_directions: "Построить маршрут",

    cta_accent: "Забронируйте отдых",
    cta_h1: "Забронируйте свой номер",
    cta_p: "Отправьте нам даты, и мы подтвердим наличие мест и цену.",
    cta_reserve: "Забронировать",
    cta_email: "hotelgoniobatumi@gmail.com",
    ct_accent: "Контакты",
    ct_h1: "Свяжитесь с нами",
    ct_p: "Позвоните, напишите на почту или отправьте даты через форму бронирования — мы подтвердим наличие мест и цену.",

    footer_desc:
      "Комфортный отель в Батуми рядом с морем и бульваром. Завтрак включён в стоимость.",
    footer_nav: "Навигация",
    footer_contact: "Контакты",
    footer_copy: "© 2026 Hotel Gonio Batumi. Все права защищены.",
    footer_rights: "Hotel Gonio Batumi. Все права защищены.",
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия пребывания",
    footer_imprint: "Правовая информация",
    footer_instagram: "Instagram",
    footer_facebook: "Facebook",

    logo_name: "Hotel Gonio Batumi",
    logo_name_full: "Hotel Gonio Batumi",

    modal_eyebrow: "Hotel Gonio Batumi · Бронирование",
    modal_title: "Запрос на проживание",
    modal_subtitle:
      "Мы проверим наличие мест и свяжемся с вами для подтверждения бронирования.",
    field_name: "Полное имя гостя",
    field_phone: "Контактный телефон",
    field_email: "Электронная почта",
    field_checkin: "Дата заезда",
    field_checkout: "Дата выезда",
    field_adults: "Взрослые",
    field_children: "Дети",
    field_room: "Тип номера",
    field_notes: "Особые пожелания",
    notes_ph: "Время прибытия, особые пожелания...",
    btn_submit: "Отправить запрос",
    loading_msg: "Отправка запроса…",
    success_badge: "Запрос получен",
    success_title: "Ваш запрос у нашей команды",
    success_p:
      "Спасибо! Мы скоро свяжемся с вами, чтобы подтвердить наличие мест и детали проживания.",
    btn_close: "Закрыть",
    adults_1: "1 взрослый",
    adults_2: "2 взрослых",
    adults_3: "3 взрослых",
    adults_4: "4 взрослых",
    children_0: "0 детей",
    children_1: "1 ребёнок",
    children_2: "2 ребёнка",

    err_dates: "Дата выезда должна быть позже даты заезда.",
    err_past: "Дата заезда не может быть в прошлом.",
    err_phone: "Укажите корректный номер телефона.",
    err_guests: "В этом номере могут разместиться не более {max} гостей.",
    err_send:
      "Не удалось отправить запрос. Попробуйте ещё раз или позвоните: {phone}.",
    err_no_service:
      "Мы открыли вашу почтовую программу с готовым запросом — нажмите «Отправить». Если ничего не открылось, напишите на {email} или позвоните: {phone}.",

    det_badge: "Об номере",
    det_area_label: "Площадь номера",
    det_bed_label: "Кровати",
    det_amenities: "В номере",
    det_proceed: "Перейти к бронированию",

    why_eyebrow: "ОПЫТ ОТЕЛЯ",
    why_heading_main: "Почему выбирают",
    why_heading_span: "Hotel Gonio Batumi?",
    why_desc:
      "Откройте для себя уютное место, где комфорт, удобное расположение и грузинское гостеприимство сочетаются воедино.",
    why_f1_title: "Удобное расположение",
    why_f1_desc: "300 м до моря и 50 м до Нового бульвара Батуми.",
    why_f2_title: "Комфорт в каждой детали",
    why_f2_desc:
      "Продуманный интерьер, ориентированный на максимальный комфорт гостей.",
    why_f3_title: "Грузинское гостеприимство",
    why_f3_desc:
      "Тёплый приём, вдохновлённый многовековой грузинской традицией гостеприимства.",
    why_f4_title: "Внимательный сервис",
    why_f4_desc:
      "Забота о гостях и дружелюбная атмосфера на протяжении всего пребывания.",
    why_subtitle: "ПОЧУВСТВУЙТЕ СЕБЯ КАК ДОМА",

    nav_link_suites: "Номера",
    nav_link_fac: "Удобства",
    nav_link_gal: "Галерея",
    nav_link_loc: "Расположение",
    nav_link_about: "О нас",

    /* Used only as a fallback in the Details popup */
    phrases: {
      "Lux Double": "Двухместный люкс",
      "Standard Double": "Стандарт с двуспальной кроватью",
      "Standard Twin": "Стандарт с двумя кроватями",
      "Standard Single": "Стандарт одноместный",
      "1 double bed": "1 двуспальная кровать",
      "2 single beds": "2 односпальные кровати",
      "1 single bed": "1 односпальная кровать",
      "High-speed internet": "Высокоскоростной интернет",
      "Private shower": "Собственный душ",
      "In-room fridge": "Холодильник в номере",
      "Sea view": "Вид на море",
      "24/7 concierge": "Консьерж 24/7",
      "Robes & Slippers": "Халат и тапочки",
      "Robes &amp; Slippers": "Халат и тапочки",
    },
  },
};
