// Premium Admin Portal Controller - Vanilla JS & LocalState
const INITIAL_SEEDS = {
  news: [
    {
      id: "news-1",
      title: "ກະຊວງປະກາດແຜນງານກະສິກຳແບບຍືນຍົງ ສຳລັບປີ 2026",
      category: "ກະສິກຳ",
      content:
        "ກະຊວງໄດ້ປະກາດໂຄງການທຶນຊ່ວຍເຫຼືອລ້າດ້ານກະສິກຳນິເວດໃໝ່ຢ່າງເປັນທາງການ. ດ້ວຍງົບປະມານທັງໝົດ 15 ລ້ານໂດລາ, ແຜນງານນີ້ມີຈຸດປະສົງເພື່ອສະໜັບສະໜູນສະຫະກອນກະສິກຳອິນຊີທ້ອງຖິ່ນ, ສົ່ງເສີມການໝູນວຽນພືດທຳມະຊາດ ແລະ ສະໜອງທຶນໃຫ້ແກ່ເຄື່ອງສູບນ້ຳພະລັງງານແສງອາທິດສຳລັບຊາວກະສິກອນຂະໜາດນ້ອຍໃນເຂດຫ່າງໄກສອກຫຼີກ.\n\nການສະໝັກຈະເລີ່ມເປີດໃນວັນທີ 1 ກໍລະກົດ 2026. ໂຄງການປະຫວັດສາດນີ້ຄາດວ່າຈະຊ່ວຍເຫຼືອຄົວເຮືອນຊາວກະສິກອນຫຼາຍກວ່າ 5,000 ຄົວເຮືອນໃນໄລຍະທຳອິດ.",
      date: "2026-06-01",
      author: "ທີມງານຜູ້ດູແລ",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800",
      status: "published",
    },
    {
      id: "news-2",
      title: "ຫຼັກສູດຝຶກອົບຮົມການອ່ານອອກຂຽນໄດ້ດ້ານດິຈິຕອນໃໝ່ກຽມເປີດຕົວ",
      category: "ການສຶກສາ",
      content:
        "ເພື່ອໃຫ້ສອດຄ່ອງກັບຍຸດທະສາດດິຈິຕອນແຫ່ງຊາດ, ພວກເຮົາກຳລັງຈະເປີດຫ້ອງຮຽນໄອທີເຄື່ອນທີ່ 50 ຫ້ອງໃນເດືອນໜ້າ. ຫ້ອງຮຽນເຫຼົ່ານີ້ໄດ້ຮັບການຕິດຕັ້ງຄອມພິວເຕີ Chromebook ທີ່ທັນສະໄໝ, ສັນຍານອິນເຕີເນັດດາວທຽມ ແລະ ມີຄູສອນສະເພາະທີ່ຈະສອນການນຳໃຊ້ຄອມພິວເຕີຂັ້ນພື້ນຖານ, ວຽກງານຫ້ອງການ ແລະ ການພັດທະນາເວັບໄຊໃຫ້ແກ່ເຍົາວະຊົນໃນເຂດຊົນນະບົດ.",
      date: "2026-05-28",
      author: "ໄອຊາ ເບລໂລ",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      status: "published",
    },
    {
      id: "news-3",
      title: "ຮ່າງເອກະສານນະໂຍບາຍເວທີປຶກສາຫາລືພະລັງງານທົດແທນປະຈຳປີ",
      category: "ພະລັງງານ",
      content:
        "ເອກະສານນະໂຍບາຍນີ້ກຳນົດການປັບປຸງກົດລະບຽບທີ່ຈຳເປັນເພື່ອເລັ່ງການເຊື່ອມຕໍ່ລະບົບໄຟຟ້າແສງອາທິດຂອງຊຸມຊົນ. ມັນໃຫ້ລາຍລະອຽດກ່ຽວກັບອັດຕາຄ່າໄຟຟ້າ, ມາດຕະຖານການເຊື່ອມຕໍ່ທາງດ້ານເຕັກນິກ ແລະ ແນວທາງການເງິນຈຸລະພາກເພື່ອຊຸກຍູ້ໃຫ້ສະພາທ້ອງຖິ່ນສະໜອງທຶນໃຫ້ແກ່ລະບົບພະລັງງານປະສົມຂອງຕົນເອງ.",
      date: "2026-06-02",
      author: "ມາກັສ ເຊັນ",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
      status: "draft",
    },
  ],
  about: {
    hero: "ນຳພາດ້ານນະວັດຕະກຳ ແລະ ຄວາມຍືນຍົງໃນທົ່ວຂະແໜງການແຫ່ງຊາດ",
    description:
      "ພວກເຮົາປະສານງານຄວາມພະຍາຍາມໃນລະດັບຊາດເພື່ອສ້າງລະບົບເສດຖະກິດ-ສັງຄົມທີ່ເຂັ້ມແຂງ ຜ່ານໂຄງການຊຸມຊົນທີ່ມີໂຄງສ້າງ, ການພັດທະນາການສຶກສາທີ່ສ້າງສັນ ແລະ ການເຕີບໂຕຂອງຂະແໜງການທີ່ຍືນຍົງ. ຂອບການຮ່ວມມືຂອງພວກເຮົາເຊື່ອມຕໍ່ລະຫວ່າງການອອກແບບນະໂຍບາຍ ແລະ ການຈັດຕັ້ງປະຕິບັດຕົວຈິງໃນພາກສະໜາມ.",
    mission:
      "ເພື່ອສ້າງຄວາມເຂັ້ມແຂງໃຫ້ແກ່ຊຸມຊົນໂດຍການສ້າງຄວາມອາດສາມາດຂອງສະຖາບັນ, ບຳລຸງສ້າງບຸກຄະລາກອນທ້ອງຖິ່ນ ແລະ ສົ່ງເສີມການພັດທະນາເສດຖະກິດ-ສັງຄົມທີ່ຍືນຍົງ.",
    vision:
      "ສັງຄົມທີ່ຮັ່ງມີ, ສະເໝີພາບ ແລະ ຍືນຍົງ ບ່ອນທີ່ທຸກຄົນສາມາດເຂົ້າເຖິງຄວາມຮູ້, ໂອກາດໃນການເຕີບໂຕ ແລະ ຊັບພະຍາກອນທີ່ສະອາດ.",
    values: [
      {
        id: "val-1",
        title: "ຄວາມຊື່ສັດ",
        desc: "ຍຶດໝັ້ນໃນຄວາມໂປ່ງໃສ ແລະ ຄວາມຮັບຜິດຊອບຢ່າງສົມບູນໃນທຸກການກະທຳຂອງແຜນງານ.",
      },
      {
        id: "val-2",
        title: "ນະວັດຕະກຳ",
        desc: "ຮັບເອົາເຕັກໂນໂລຊີທີ່ພົ້ນເດັ່ນ ແລະ ວິທີການທີ່ເປັນມິດກັບສິ່ງແວດລ້ອມເພື່ອແກ້ໄຂບັນຫາທີ່ຍາວນານ.",
      },
      {
        id: "val-3",
        title: "ຄວາມຍືນຍົງ",
        desc: "ຮັບປະກັນວ່າວິທີການແກ້ໄຂຂອງພວກເຮົານັ້ນຮັກສາຊັບພະຍາກອນສິ່ງແວດລ້ອມສຳລັບຄົນລຸ້ນຫຼັງ.",
      },
      {
        id: "val-4",
        title: "ການມີສ່ວນຮ່ວມຂອງທຸກຄົນ",
        desc: "ຈັດລຳດັບຄວາມສຳຄັນໃຫ້ແກ່ປະຊາກອນໃນເຂດຫ່າງໄກສອກຫຼີກ ແລະ ຜູ້ທີ່ມີລາຍໄດ້ໜ້ອຍໃນທຸກໆຂະແໜງການ.",
      },
    ],
  },
  org: [
    {
      id: "member-1",
      name: "ດຣ. ເອລິຊາເບັດ ແວນ",
      role: "ຜູ້ອຳນວຍການບໍລິຫານ",
      avatar: "EV",
      bio: "ປະລິນຍາເອກດ້ານເສດຖະສາດການພັດທະນາຈາກ Oxford. ມີປະສົບການຫຼາຍກວ່າ 15 ປີໃນການອອກແບບນະໂຍບາຍສະຫວັດດີການສັງຄົມ ແລະ ທຶນອຸດໜູນກະສິກຳແຫ່ງຊາດ.",
      order: 1,
    },
    {
      id: "member-2",
      name: "ມາກັສ ເຊັນ",
      role: "ຜູ້ອຳນວຍການຝ່າຍດຳເນີນງານຂະແໜງການ",
      avatar: "MC",
      bio: "ອະດີດຜູ້ນຳທີມບໍລິຫານຈາກ McKinsey. ເນັ້ນໃສ່ການເຊື່ອມໂຍງເຕັກໂນໂລຊີພະລັງງານທີ່ຍືນຍົງເຂົ້າໃນໂຄງລ່າງພື້ນຖານ.",
      order: 2,
    },
  ],
  sectors: [
    {
      id: "sector-1",
      name: "ກະສິກຳ ແລະ ປ່າໄມ້ແບບຍືນຍົງ",
      icon: "leaf",
      themeColor: "#10B981",
      status: "active",
      desc: "ສົ່ງເສີມເຕັກໂນໂລຊີກະສິກຳນິເວດ, ທຶນຊ່ວຍເຫຼືອລ້າສຳລັບຊາວກະສິກອນຂະໜາດນ້ອຍ ແລະ ການຟື້ນຟູປ່າໄມ້ຊຸມຊົນ.",
    },
    {
      id: "sector-2",
      name: "ການສຶກສາ ແລະ ຝຶກອົບຮົມດິຈິຕອນ",
      icon: "book",
      themeColor: "#3B82F6",
      status: "active",
      desc: "ຫ້ອງຮຽນໄອທີເຄື່ອນທີ່, ຫຼັກສູດການຮຽນຮູ້ດິຈິຕອນ ແລະ ການສ້າງຄວາມອາດສາມາດໃຫ້ແກ່ໄວໜຸ່ມໃນເຂດຊົນນະບົດ.",
    },
    {
      id: "sector-3",
      name: "ພະລັງງານທົດແທນ ແລະ ໄຟຟ້າແສງອາທິດ",
      icon: "zap",
      themeColor: "#F59E0B",
      status: "active",
      desc: "ການຕິດຕັ້ງລະບົບພະລັງງານແສງອາທິດໃນຊຸມຊົນຫ່າງໄກສອກຫຼີກ ແລະ ການຮັກສາສິ່ງແວດລ້ອມແບບຍືນຍົງ.",
    },
    {
      id: "sector-4",
      name: "ສາທາລະນະສຸກ ແລະ ສຸຂະພາບບ້ານ",
      icon: "heart",
      themeColor: "#EF4444",
      status: "active",
      desc: "ການປັບປຸງການເຂົ້າເຖິງການບໍລິການສາທາລະນະສຸກພື້ນຖານ, ສຸຂະອະນາໄມ ແລະ ນ້ຳສະອາດໃນຊຸມຊົນ.",
    },
  ],
  activities: [
    {
      id: "act-1",
      title: "ກອງປະຊຸມຝຶກອົບຮົມດ້ານກະສິກຳນິເວດ 2026",
      date: "2026-06-15",
      time: "09:00",
      location: "ຫໍປະຊຸມແຫ່ງຊາດ, ຫ້ອງໂຖງ B",
      organizer: "ດຣ. ເອລິຊາເບັດ ແວນ",
      desc: "ກອງປະຊຸມສຳລັບສະຫະກອນທ້ອງຖິ່ນເພື່ອຮຽນຮູ້ກ່ຽວກັບປຸ໋ຍຊີວະພາບທີ່ທັນສະໄໝ ແລະ ເຕັກນິກການຫົດນ້ຳແບບຢອດ.",
      status: "active",
    },
    {
      id: "act-2",
      title: "ກອງປະຊຸມເປີດຕົວໂຄງການໂຮງຮຽນອັດສະລິຍະ",
      date: "2026-06-22",
      time: "14:00",
      location: "ສູນນະວັດຕະກຳກະຊວງ",
      organizer: "ໄອຊາ ເບລໂລ",
      desc: "ການປຶກສາຫາລືກັບພາກສ່ວນກ່ຽວຂ້ອງເພື່ອຈັດວາງຫຼັກສູດການຝຶກອົບຮົມດິຈິຕອນໃຫ້ສອດຄ່ອງກັບຫຼັກສູດໂຮງຮຽນປະຖົມ.",
      status: "pending",
    },
    {
      id: "act-3",
      title: "ກອງປະຊຸມສຸດຍອດ ແລະ ງານວາງສະແດງພະລັງງານສະອາດ",
      date: "2026-07-05",
      time: "10:00",
      location: "ລານພົນລະເມືອງ, ຫ້ອງວາງສະແດງ C",
      organizer: "ມາກັສ ເຊັນ",
      desc: "ວາງສະແດງການແກ້ໄຂບັນຫາການເກັບຮັກສາພະລັງງານແສງອາທິດ ແລະ ພະລັງງານລົມແບບກະຈາຍສູນສຳລັບສະພາທ້ອງຖິ່ນ.",
      status: "active",
    },
  ],
  contacts: [
    {
      id: "contact-1",
      name: "Johnathan Wright",
      email: "jwright@tech-solutions.org",
      subject: "ການສອບຖາມຄູ່ຮ່ວມງານ ແລະ ການບໍລິຈາກອຸປະກອນ",
      message:
        "ຮຽນ ທີມງານ,\n\nຂ້າພະເຈົ້າຕາງໜ້າໃຫ້ບໍລິສັດ Wright Tech Solutions. ຫວ່າງມໍ່ໆມານີ້ ພວກເຮົາໄດ້ຢຸດການນຳໃຊ້ Chromebook 120 ເຄື່ອງທີ່ຍັງໃຊ້ງານໄດ້ດີ ແລະ ຢາກບໍລິຈາກໃຫ້ກັບໂຄງການຝຶກອົບຮົມໄອທີເຄື່ອນທີ່ຂອງທ່ານ. ກະລຸນາແຈ້ງໃຫ້ພວກເຮົາຊາບກ່ຽວກັບຄວາມຕ້ອງການດ້ານໂລຈິສຕິກ ແລະ ຖ້າທ່ານສາມາດຮັບອຸປະກອນເຫຼົ່ານີ້ໄດ້ໃນອາທິດໜ້າ.\n\nດ້ວຍຄວາມເຄົາລົບ,\nJohnathan Wright",
      date: "2026-06-03 08:30",
      status: "unread",
    },
    {
      id: "contact-2",
      name: "Clara Montgomery",
      email: "clara.m@permaculture-network.com",
      subject: "ການສະໝັກເປັນອາສາສະໝັກກະສິກຳອິນຊີ",
      message:
        "ສະບາຍດີ,\n\nຂ້າພະເຈົ້າເປັນນັກອອກແບບກະສິກຳແບບຍືນຍົງທີ່ມີປະສົບການ 8 ປີໃນການປູກປ່າຊຸມຊົນໃນເຂດແຫ້ງແລ້ງ. ຂ້າພະເຈົ້າເຫັນວ່າທ່ານກຳລັງຈັດກອງປະຊຸມຝຶກອົບຮົມດ້ານກະສິກຳນິເວດໃນວັນທີ 15 ມິຖຸນາ. ຂ້າພະເຈົ້າຢາກສະໝັກເປັນຜູ້ຊ່ວຍຝຶກອົບຮົມ ຫຼື ຈັດສະຖານີສາທິດ. ຫວັງຢ່າງຍິ່ງວ່າຈະໄດ້ຮັບການຕອບກັບຈາກທ່ານ.\n\nດ້ວຍຄວາມຮັກແພງ,\nClara",
      date: "2026-06-02 15:45",
      status: "replied",
    },
    {
      id: "contact-3",
      name: "David Thorne",
      email: "dthorne@dailynews.com",
      subject: "ການຂໍສຳພາດ: ໂຄງການອຸດໜູນໃໝ່",
      message:
        "ຮຽນ ທ່ານຜູ້ອຳນວຍການ,\n\nຂ້າພະເຈົ້າເປັນນັກຂ່າວອາວຸໂສທີ່ຕິດຕາມນະໂຍບາຍພາກພື້ນໃຫ້ແກ່ໜັງສືພິມ Daily News. ພວກເຮົານຳສະເໜີບົດຄວາມກ່ຽວກັບແຜນງານກະສິກຳແບບຍືນຍົງ 15 ລ້ານໂດລາ ທີ່ໄດ້ປະກາດໄປວານນີ້. ພວກເຮົາສາມາດຂໍເວລານັດໝາຍໂທລະສັບສັ້ນໆ 10 ນາທີກັບ ດຣ. ແວນ ໃນອາທິດນີ້ເພື່ອຂໍບົດສຳພາດໄດ້ຫຼືບໍ່?\n\nດ້ວຍຄວາມຈິງໃຈ,\nDavid Thorne",
      date: "2026-06-02 10:15",
      status: "unread",
    },
  ],
  logs: [
    {
      id: "log-1",
      type: "news",
      text: "ບົດຄວາມຂ່າວສານ 'ແຜນງານກະສິກຳແບບຍືນຍົງ' ໄດ້ຮັບການເຜີຍແຜ່ແລ້ວ",
      time: "2 ຊົ່ວໂມງກ່ອນ",
    },
    {
      id: "log-2",
      type: "contact",
      text: "ໄດ້ຮັບຂໍ້ຄວາມຕິດຕໍ່ໃໝ່ຈາກ Johnathan Wright",
      time: "3 ຊົ່ວໂມງກ່ອນ",
    },
    {
      id: "log-3",
      type: "about",
      text: "ປັບປຸງວິໄສທັດຫຼັກຂອງອົງກອນໃນການຕັ້ງຄ່າຂໍ້ມູນກ່ຽວກັບແລ້ວ",
      time: "1 ວັນກ່ອນ",
    },
    {
      id: "log-4",
      type: "news",
      text: "ຮ່າງເອກະສານນະໂຍບາຍຖືກສ້າງຂຶ້ນໂດຍ ມາກັສ ເຊັນ",
      time: "1 ວັນກ່ອນ",
    },
  ],
};

class DataStore {
  constructor() {
    this.key = "ADMIN_PORTAL_DATABASE";
    this.db = this.load();
  }

  load() {
    const stored = localStorage.getItem(this.key);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error("Database corrupted, resetting...", e);
      }
    }
    this.db = JSON.parse(JSON.stringify(INITIAL_SEEDS));
    this.save();
    return this.db;
  }

  save() {
    localStorage.setItem(this.key, JSON.stringify(this.db));
  }

  addLog(type, text) {
    this.db.logs.unshift({
      id: `log-${Date.now()}`,
      type: type,
      text: text,
      time: "ມື້ກີ້ນີ້",
    });
    if (this.db.logs.length > 20) this.db.logs.pop();
    this.save();
  }
}

// Global DB Instance
const store = new DataStore();

// UI State & Global Variables
let currentActiveView = "dashboard";
let editingEntityId = null;

const SVG_ICONS = {
  dashboard: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"/></svg>`,
  news: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>`,
  about: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  org: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
  sectors: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`,
  activities: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
  contacts: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  edit: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
  delete: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
  plus: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`,
  leaf: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  book: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
  zap: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  heart: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
  search: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
  reply: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>`,
  archive: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>`,
  arrowLeft: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>`,
};

// Toast Notification Manager
class ToastManager {
  constructor() {
    this.container = document.getElementById("toast-container");
  }

  show(message, type = "success", duration = 3000) {
    if (!this.container) return; // Safeguard
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let iconHtml = "";
    if (type === "success") {
      iconHtml = `<svg style="color:var(--success);width:20px;height:20px" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
    } else if (type === "danger") {
      iconHtml = `<svg style="color:var(--danger);width:20px;height:20px" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;
    } else {
      iconHtml = `<svg style="color:var(--warning);width:20px;height:20px" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
    }

    toast.innerHTML = `
            ${iconHtml}
            <span class="toast-message">${message}</span>
        `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
}
const toast = new ToastManager();

// Modal Overlays Manager
class ModalManager {
  static open(modalId) {
    const overlay = document.getElementById(modalId);
    if (overlay) {
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  static close(modalId) {
    const overlay = document.getElementById(modalId);
    if (overlay) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
}

// Page Route Controller & View Registry
const routes = {};

function initializeUserRole() {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";

  // Update profile badge UI elements
  const avatarEl = document.getElementById("header-user-avatar");
  const nameEl = document.getElementById("header-user-name");
  const roleEl = document.getElementById("header-user-role");

  const roleDetails = {
    super_admin: {
      initials: "SA",
      name: "ຜູ້ດູແລລະບົບ",
      title: "ຜູ້ບໍລິຫານສູງສຸດ",
    },
    admin: { initials: "AD", name: "ຜູ້ດູແລລະບົບ", title: "ຜູ້ດູແລລະບົບ" },
    maker: { initials: "MK", name: "ຜູ້ສ້າງເນື້ອຫາ", title: "ຜູ້ສ້າງ (Maker)" },
    checker: {
      initials: "CK",
      name: "ຜູ້ກວດສອບ",
      title: "ຜູ້ກວດສອບ (Checker)",
    },
  };

  const details = roleDetails[role] || roleDetails.super_admin;
  if (avatarEl) avatarEl.textContent = details.initials;
  if (nameEl) nameEl.textContent = details.name;
  if (roleEl) roleEl.textContent = details.title;

  // Bind dropdown toggle
  const dropdownBtn = document.getElementById("profile-dropdown-btn");
  const dropdownWrapper = document.querySelector(".profile-badge-wrapper");
  const dropdownMenu = document.getElementById("profile-dropdown-menu");

  if (dropdownBtn && dropdownWrapper) {
    // Clone and replace to clean listeners
    const newBtn = dropdownBtn.cloneNode(true);
    dropdownBtn.parentNode.replaceChild(newBtn, dropdownBtn);

    newBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownWrapper.classList.toggle("active");
      if (dropdownMenu) dropdownMenu.classList.toggle("active");
    });

    document.addEventListener("click", () => {
      dropdownWrapper.classList.remove("active");
      if (dropdownMenu) dropdownMenu.classList.remove("active");
    });
  }
}

window.switchUserRole = function (role) {
  localStorage.setItem("CURRENT_USER_ROLE", role);
  initializeUserRole();
  toast.show(`ປ່ຽນບົດບາດເປັນ ${role} ສຳເລັດແລ້ວ.`);
  router.handleHashChange();
};

function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf("/") + 1);
  if (!filename || filename === "index.html") return "dashboard";
  if (filename === "news.html") return "news";
  if (filename === "about.html") return "about";
  if (filename === "org.html") return "org";
  if (filename === "sectors.html") return "sectors";
  if (filename === "activities.html") return "activities";
  if (filename === "contacts.html") return "contacts";
  return "dashboard";
}

function renderCurrentPage() {
  const page = getCurrentPage();
  currentActiveView = page;
  const render = routes[page];
  if (render) {
    const filename =
      window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1,
      ) || "index.html";
    document.querySelectorAll(".sidebar-menu-item").forEach((item) => {
      const anchor = item.querySelector("a");
      if (anchor) {
        let href = anchor.getAttribute("href") || "";
        if (
          href === filename ||
          (filename === "index.html" && href === "index.html") ||
          (filename === "" && href === "index.html")
        ) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      }
    });

    const pageTitleEl = document.getElementById("view-title");
    if (pageTitleEl) {
      const laoTitles = {
        dashboard: "ແຜງຄວບຄຸມ",
        news: "ຈັດການຂ່າວສານ",
        about: "ຂໍ້ມູນກ່ຽວກັບ",
        org: "ອົງກອນ / ໂຄງຮ່າງ",
        sectors: "ຂະແໜງການ",
        activities: "ກິດຈະກຳ",
        contacts: "ກ່ອງຂໍ້ຄວາມຕິດຕໍ່",
      };
      pageTitleEl.textContent = laoTitles[page] || page;
    }

    const mainContainer = document.getElementById("app-view");
    if (mainContainer) {
      if (
        page === "dashboard" &&
        mainContainer.querySelector(".chart-container")
      ) {
        const newsVal = document.getElementById("stat-news-count");
        if (newsVal) newsVal.textContent = store.db.news.length;
        const sectorsVal = document.getElementById("stat-sectors-count");
        if (sectorsVal) sectorsVal.textContent = store.db.sectors.length;
        const activitiesVal = document.getElementById("stat-activities-count");
        if (activitiesVal)
          activitiesVal.textContent = store.db.activities.length;
        const contactsVal = document.getElementById("stat-contacts-count");
        if (contactsVal)
          contactsVal.textContent = store.db.contacts.filter(
            (c) => c.status === "unread",
          ).length;

        const logsContainer = document.getElementById("dashboard-logs");
        if (logsContainer) {
          if (store.db.logs.length === 0) {
            logsContainer.innerHTML = `<li style="font-size:13px; color:var(--text-muted); text-align:center; padding: 20px 0;">ບໍ່ມີບັນທຶກການເຄື່ອນໄຫວ.</li>`;
          } else {
            logsContainer.innerHTML = store.db.logs
              .map(
                (log) => `
                            <li class="activity-item ${log.type}">
                                <span class="activity-icon-bullet"></span>
                                <div class="activity-meta">
                                    <span style="font-weight:500">${log.text}</span>
                                    <span class="activity-time">${log.time}</span>
                                </div>
                            </li>
                        `,
              )
              .join("");
          }
        }
      } else {
        mainContainer.innerHTML = "";
        const viewPane = document.createElement("div");
        viewPane.className = "view-pane";
        render(viewPane);
        mainContainer.appendChild(viewPane);
      }
    }

    const sidebar = document.querySelector("aside");
    if (sidebar) sidebar.classList.remove("mobile-open");
  }
}

const router = {
  register: function (route, renderFn) {
    const pageKey = route.startsWith("#") ? route.substring(1) : route;
    routes[pageKey] = renderFn;
  },
  handleHashChange: function () {
    renderCurrentPage();
  },
};

// --- 1. DASHBOARD VIEW ---
router.register("#dashboard", (container) => {
  const totalNews = store.db.news.length;
  const totalSectors = store.db.sectors.length;
  const totalActivities = store.db.activities.length;
  const unreadContacts = store.db.contacts.filter(
    (c) => c.status === "unread",
  ).length;

  container.innerHTML = `
        <div class="grid-4x">
            <div class="card stat-card" style="--card-color: var(--primary); --card-color-glow: var(--primary-glow); --card-accent: var(--primary-gradient)">
                <div>
                    <span class="stat-label">ບົດຄວາມທັງໝົດ</span>
                    <div class="stat-value" id="stat-news-count">${totalNews}</div>
                </div>
                <div class="stat-icon">${SVG_ICONS.news}</div>
            </div>
            
            <div class="card stat-card" style="--card-color: var(--accent-cyan); --card-color-glow: rgba(6, 182, 212, 0.4); --card-accent: var(--accent-cyan-gradient)">
                <div>
                    <span class="stat-label">ຂະແໜງການທີ່ເຄື່ອນໄຫວ</span>
                    <div class="stat-value" id="stat-sectors-count">${totalSectors}</div>
                </div>
                <div class="stat-icon">${SVG_ICONS.sectors}</div>
            </div>
            
            <div class="card stat-card" style="--card-color: var(--success); --card-color-glow: rgba(16, 185, 129, 0.4); --card-accent: var(--success)">
                <div>
                    <span class="stat-label">ແຜນງານທີ່ຈະມາເຖິງ</span>
                    <div class="stat-value" id="stat-activities-count">${totalActivities}</div>
                </div>
                <div class="stat-icon">${SVG_ICONS.activities}</div>
            </div>
            
            <div class="card stat-card" style="--card-color: var(--danger); --card-color-glow: rgba(239, 68, 68, 0.4); --card-accent: var(--danger)">
                <div>
                    <span class="stat-label">ຂໍ້ຄວາມທີ່ຍັງບໍ່ທັນອ່ານ</span>
                    <div class="stat-value" id="stat-contacts-count">${unreadContacts}</div>
                </div>
                <div class="stat-icon">${SVG_ICONS.contacts}</div>
            </div>
        </div>

        <div class="dashboard-layout">
            <div class="card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 20px;">
                    <h3 style="font-size:16px;">ການເຄື່ອນໄຫວ ແລະ ການວິເຄາະເວທີ</h3>
                    <div style="display:flex; gap:8px;">
                        <span style="display:inline-flex; align-items:center; gap:6px; font-size:11px; color:var(--primary); font-weight:600">
                            <span style="width:8px; height:8px; border-radius:50%; background-color:var(--primary)"></span> ການອັບເດດເນື້ອໃນ
                        </span>
                        <span style="display:inline-flex; align-items:center; gap:6px; font-size:11px; color:var(--accent-cyan); font-weight:600">
                            <span style="width:8px; height:8px; border-radius:50%; background-color:var(--accent-cyan)"></span> ຄຳຖາມຈາກຜູ້ຢ້ຽມຊົມ
                        </span>
                    </div>
                </div>
                
                <div class="chart-container">
                    <svg class="svg-chart" viewBox="0 0 500 220">
                        <defs>
                            <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stop-color="#6366F1" />
                                <stop offset="100%" stop-color="#06B6D4" />
                            </linearGradient>
                            <linearGradient id="chart-area-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stop-color="#6366F1" stop-opacity="0.3" />
                                <stop offset="100%" stop-color="#06B6D4" stop-opacity="0.0" />
                            </linearGradient>
                        </defs>
                        <line x1="10" y1="20" x2="490" y2="20" class="chart-grid-line" />
                        <line x1="10" y1="70" x2="490" y2="70" class="chart-grid-line" />
                        <line x1="10" y1="120" x2="490" y2="120" class="chart-grid-line" />
                        <line x1="10" y1="170" x2="490" y2="170" class="chart-grid-line" />
                        
                        <path d="M 10 180 Q 90 140 170 110 T 330 60 T 490 30" class="chart-line-path" />
                        <path d="M 10 180 Q 90 140 170 110 T 330 60 T 490 30 L 490 200 L 10 200 Z" class="chart-area-path" />
                        
                        <circle cx="10" cy="180" class="chart-point" />
                        <circle cx="90" cy="140" class="chart-point" />
                        <circle cx="170" cy="110" class="chart-point" />
                        <circle cx="250" cy="85" class="chart-point" />
                        <circle cx="330" cy="60" class="chart-point" />
                        <circle cx="410" cy="45" class="chart-point" />
                        <circle cx="490" cy="30" class="chart-point" />
                    </svg>
                </div>
                
                <div style="display:flex; justify-content:space-between; margin-top:12px; font-size:11px; color:var(--text-muted); font-weight:600; padding:0 10px;">
                    <span>ມັງກອນ</span><span>ກຸມພາ</span><span>ມີນາ</span><span>ເມສາ</span><span>ພຶດສະພາ</span><span>ມິຖຸນາ</span><span>ກໍລະກົດ</span>
                </div>
            </div>

            <div class="card" style="display:flex; flex-direction:column;">
                <h3 style="font-size:16px; margin-bottom: 20px;">ການກວດສອບການເຄື່ອນໄຫວລະບົບ</h3>
                <ul class="activity-list" id="dashboard-logs"></ul>
            </div>
        </div>
    `;

  const logsContainer = container.querySelector("#dashboard-logs");
  if (store.db.logs.length === 0) {
    logsContainer.innerHTML = `<li style="font-size:13px; color:var(--text-muted); text-align:center; padding: 20px 0;">ບໍ່ມີບັນທຶກການເຄື່ອນໄຫວ.</li>`;
  } else {
    logsContainer.innerHTML = store.db.logs
      .map(
        (log) => `
            <li class="activity-item ${log.type}">
                <span class="activity-icon-bullet"></span>
                <div class="activity-meta">
                    <span style="font-weight:500">${log.text}</span>
                    <span class="activity-time">${log.time}</span>
                </div>
            </li>
        `,
      )
      .join("");
  }
});

// --- 2. NEWS VIEW (CRUD) ---
let newsSearchQuery = "";

router.register("#news", (container) => {
  renderNewsView(container);
});

function renderNewsView(container) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";

  const filteredNews = store.db.news.filter(
    (item) =>
      item.title.toLowerCase().includes(newsSearchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(newsSearchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(newsSearchQuery.toLowerCase()),
  );

  // FIXED PORTION: The HTML template string is now properly closed
  container.innerHTML = `
        <div class="section-header">
            <div class="search-input-wrapper">
                ${SVG_ICONS.search}
                <input type="text" class="form-control" id="news-search-bar" placeholder="ຄົ້ນຫາຂ່າວສານດ້ວຍຫົວຂໍ້ ຫຼື ແທັກ..." value="${newsSearchQuery}">
            </div>
            ${
              role !== "checker"
                ? `
                <button class="btn btn-primary" id="btn-create-news">
                    ${SVG_ICONS.plus} ຂຽນຂ່າວສານ
                </button>
            `
                : ""
            }
        </div>

        <div class="card" style="padding:0; overflow:hidden;">
            <div class="table-responsive">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>ຮູບໜ້າປົກ</th>
                            <th>ຫົວຂໍ້ ແລະ ບົດສະຫຼຸບ</th>
                            <th>ໝວດໝູ່</th>
                            <th>ຜູ້ຂຽນ</th>
                            <th>ວັນທີ</th>
                            <th>ສະຖານະ</th>
                            <th style="text-align:right">ການຈັດການ</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${
                          filteredNews.length === 0
                            ? `
                            <tr>
                                <td colspan="7" style="text-align:center; padding: 40px; color:var(--text-muted)">
                                    ບໍ່ພົບບົດຄວາມຂ່າວສານ. ສ້າງບົດຄວາມໃໝ່ເພື່ອເລີ່ມຕົ້ນ!
                                </td>
                            </tr>
                        `
                            : filteredNews
                                .map(
                                  (item) => `
                            <tr>
                                <td><img src="${item.image}" alt="cover" style="width:60px; height:40px; object-fit:cover; border-radius:4px;"></td>
                                <td style="max-width: 250px;">
                                    <div style="font-weight:700; color:var(--text-primary); margin-bottom:4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.title}</div>
                                    <div style="font-size:12px; color:var(--text-secondary); line-height:1.4; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.content}</div>
                                </td>
                                <td><span class="badge" style="background:var(--bg-hover); color:var(--text-secondary)">${item.category}</span></td>
                                <td><span style="font-size:13px; font-weight:500">${item.author}</span></td>
                                <td><span style="font-size:13px; color:var(--text-secondary)">${item.date}</span></td>
                                <td>
                                    <span class="badge badge-${item.status === "published" ? "active" : "pending"}">
                                        ${item.status === "published" ? "ເຜີຍແຜ່ແລ້ວ" : "ສະບັບຮ່າງ"}
                                    </span>
                                </td>
                                <td style="text-align:right">
                                    <div class="btn-group" style="justify-content: flex-end; align-items: center; gap: 8px;">
                                        ${
                                          (role === "checker" ||
                                            role === "admin" ||
                                            role === "super_admin") &&
                                          item.status !== "published"
                                            ? `
                                            <button class="btn btn-primary" onclick="approveNews('${item.id}')" title="ອະນຸມັດ" style="padding: 6px 12px; font-size: 12px; height: 32px;">
                                                ອະນຸມັດ
                                            </button>
                                        `
                                            : ""
                                        }
                                        ${
                                          role !== "checker"
                                            ? `
                                            <button class="btn btn-secondary btn-icon" onclick="editNews('${item.id}')" title="ແກ້ໄຂ">
                                                ${SVG_ICONS.edit}
                                            </button>
                                            <button class="btn btn-danger btn-icon" onclick="deleteNews('${item.id}')" title="ລຶບ">
                                                ${SVG_ICONS.delete}
                                            </button>
                                        `
                                            : ""
                                        }
                                    </div>
                                </td>
                            </tr>
                        `,
                                )
                                .join("")
                        }
                    </tbody>
                </table>
            </div>
        </div>
    `;

  // Bind Search Event
  const searchInput = container.querySelector("#news-search-bar");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      newsSearchQuery = e.target.value;
      renderNewsView(container);
    });
  }

  // Bind Add Event
  if (role !== "checker") {
    const addNewsBtn = container.querySelector("#btn-create-news");
    if (addNewsBtn) {
      addNewsBtn.addEventListener("click", () => {
        editingEntityId = null;
        document.getElementById("news-modal-title").textContent =
          "ຂຽນຂ່າວສານໃໝ່";
        document.getElementById("news-form").reset();
        document.getElementById("news-form-date").value = new Date()
          .toISOString()
          .substring(0, 10);
        ModalManager.open("modal-news-form");
      });
    }
  }
}

// FIXED PORTION: Restored missing editNews and deleteNews functions
window.editNews = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") return;
  const item = store.db.news.find((n) => n.id === id);
  if (!item) return;

  editingEntityId = id;
  document.getElementById("news-modal-title").textContent = "ແກ້ໄຂຂ່າວສານ";
  document.getElementById("news-form-title").value = item.title;
  document.getElementById("news-form-category").value = item.category;
  document.getElementById("news-form-author").value = item.author;
  document.getElementById("news-form-date").value = item.date;
  document.getElementById("news-form-status").value = item.status;
  document.getElementById("news-form-image").value = item.image;
  document.getElementById("news-form-content").value = item.content;

  ModalManager.open("modal-news-form");
};

window.deleteNews = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") return;
  if (confirm("ທ່ານແນ່ໃຈບໍວ່າຕ້ອງການລຶບບົດຄວາມນີ້?")) {
    const index = store.db.news.findIndex((n) => n.id === id);
    if (index > -1) {
      const item = store.db.news[index];
      store.db.news.splice(index, 1);
      store.addLog("news", `ລຶບບົດຄວາມຂ່າວສານ '${item.title}' ແລ້ວ`);
      store.save();
      toast.show("ລຶບບົດຄວາມຂ່າວສານສຳເລັດແລ້ວ.");
      router.handleHashChange();
    }
  }
};

window.approveNews = function (id) {
  const item = store.db.news.find((n) => n.id === id);
  if (!item) return;

  item.status = "published";
  store.addLog("news", `ອະນຸມັດບົດຄວາມຂ່າວສານ '${item.title}' ແລ້ວ`);
  store.save();
  toast.show("ອະນຸມັດບົດຄວາມຂ່າວສານສຳເລັດແລ້ວ.");
  router.handleHashChange();
};

window.submitNewsForm = function (event) {
  event.preventDefault();
  const title = document.getElementById("news-form-title").value.trim();
  const category = document.getElementById("news-form-category").value.trim();
  const author = document.getElementById("news-form-author").value.trim();
  const date = document.getElementById("news-form-date").value;
  const status = document.getElementById("news-form-status").value;
  const image = document.getElementById("news-form-image").value.trim();
  const content = document.getElementById("news-form-content").value.trim();

  if (!title || !category || !content) {
    toast.show("ກະລຸນາປ້ອນຂໍ້ມູນຫົວຂໍ້, ໝວດໝູ່ ແລະ ເນື້ອໃນ.", "danger");
    return;
  }

  if (editingEntityId) {
    const item = store.db.news.find((n) => n.id === editingEntityId);
    if (item) {
      item.title = title;
      item.category = category;
      item.author = author || "ທີມງານຜູ້ດູແລ";
      item.date = date || new Date().toISOString().substring(0, 10);
      item.status = status;
      item.image = image;
      item.content = content;
      store.addLog("news", `ອັບເດດບົດຄວາມຂ່າວສານ '${title}' ແລ້ວ`);
      toast.show("ອັບເດດບົດຄວາມຂ່າວສານສຳເລັດແລ້ວ.");
    }
  } else {
    const newNews = {
      id: `news-${Date.now()}`,
      title,
      category,
      author: author || "ທີມງານຜູ້ດູແລ",
      date: date || new Date().toISOString().substring(0, 10),
      status,
      image,
      content,
    };
    store.db.news.push(newNews);
    store.addLog("news", `ສ້າງບົດຄວາມຂ່າວສານ '${title}' ແລ້ວ`);
    toast.show("ສ້າງບົດຄວາມຂ່າວສານໃໝ່ສຳເລັດແລ້ວ.");
  }

  store.save();
  ModalManager.close("modal-news-form");
  router.handleHashChange();
};

// --- 3. ABOUT US VIEW (CRUD values) ---
router.register("#about", (container) => {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  const isReadOnly = role === "checker";

  container.innerHTML = `
            <div class="card" style="display:flex; flex-direction:column; gap:16px; padding:0; overflow:hidden;">
                <div style="display:flex; justify-content:space-between; align-items:center; padding: 20px 20px 8px 20px;">
                    <h3 style="font-size:16px; margin:0;">ຄຸນຄ່າຫຼັກຂອງອົງກອນ (Core Values)</h3>
                    ${
                      !isReadOnly
                        ? `
                        <button class="btn btn-primary btn-icon" id="btn-add-value" style="width:32px; height:32px;" title="ເພີ່ມຄຸນຄ່າຫຼັກ">
                            ${SVG_ICONS.plus}
                        </button>
                    `
                        : ""
                    }
                </div>

                <div class="table-responsive">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>ຫົວຂໍ້ຄຸນຄ່າ</th>
                                <th>ຄຳອະທິບາຍຄຸນຄ່າ</th>
                                ${!isReadOnly ? `<th style="text-align:right">ການຈັດການ</th>` : ""}
                            </tr>
                        </thead>
                        <tbody>
                            ${
                              store.db.about.values.length === 0
                                ? `
                                <tr>
                                    <td colspan="${!isReadOnly ? 3 : 2}" style="text-align:center; padding:40px; color:var(--text-muted);">
                                        ຍັງບໍ່ມີຂໍ້ມູນຄຸນຄ່າຫຼັກເທື່ອ.
                                    </td>
                                </tr>
                            `
                                : store.db.about.values
                                    .map(
                                      (val) => `
                                <tr>
                                    <td style="font-weight:700; color:var(--text-primary); font-size:14px; min-width:160px;">
                                        ${val.title}
                                    </td>
                                    <td style="font-size:13px; color:var(--text-secondary); line-height: 1.5;">
                                        ${val.desc}
                                    </td>
                                    ${
                                      !isReadOnly
                                        ? `
                                        <td style="text-align:right; width:90px;">
                                            <div class="btn-group" style="justify-content: flex-end; gap:6px;">
                                                <button class="btn btn-secondary btn-icon" style="width:28px; height:28px; padding:0;" onclick="editCoreValue('${val.id}')" title="ແກ້ໄຂ">
                                                    ${SVG_ICONS.edit}
                                                </button>
                                                <button class="btn btn-danger btn-icon" style="width:28px; height:28px; padding:0;" onclick="deleteCoreValue('${val.id}')" title="ລຶບ">
                                                    ${SVG_ICONS.delete}
                                                </button>
                                            </div>
                                        </td>
                                    `
                                        : ""
                                    }
                                </tr>
                            `,
                                    )
                                    .join("")
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

  if (!isReadOnly) {
    const addBtn = container.querySelector("#btn-add-value");
    if (addBtn) {
      addBtn.addEventListener("click", () => {
        editingEntityId = null;
        document.getElementById("value-modal-title").textContent =
          "ເພີ່ມຄຸນຄ່າຫຼັກ";
        document.getElementById("value-form").reset();
        ModalManager.open("modal-value-form");
      });
    }
  }
});

window.submitAboutInfoForm = function (event) {
  event.preventDefault();
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") {
    toast.show("ຜູ້ກວດສອບບໍ່ມີສິດແກ້ໄຂຂໍ້ມູນຫຼັກ.", "danger");
    return;
  }
  store.db.about.hero = document.getElementById("about-hero").value.trim();
  store.db.about.description = document
    .getElementById("about-desc")
    .value.trim();
  store.db.about.mission = document
    .getElementById("about-mission")
    .value.trim();
  store.db.about.vision = document.getElementById("about-vision").value.trim();
  store.addLog("about", "ອັບເດດພາລະກິດ & ວິໄສທັດຫຼັກຂອງອົງກອນແລ້ວ");
  store.save();
  toast.show("ບັນທຶກຂໍ້ມູນຫຼັກສຳເລັດແລ້ວ.");
};

window.editCoreValue = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") return;
  const val = store.db.about.values.find((v) => v.id === id);
  if (!val) return;

  editingEntityId = id;
  document.getElementById("value-modal-title").textContent = "ແກ້ໄຂຄຸນຄ່າຫຼັກ";
  document.getElementById("value-form-title").value = val.title;
  document.getElementById("value-form-desc").value = val.desc;

  ModalManager.open("modal-value-form");
};

window.deleteCoreValue = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") return;
  if (confirm("ທ່ານແນ່ໃຈບໍວ່າຕ້ອງການລຶບຄຸນຄ່າຫຼັກນີ້?")) {
    const index = store.db.about.values.findIndex((v) => v.id === id);
    if (index > -1) {
      const v = store.db.about.values[index];
      store.db.about.values.splice(index, 1);
      store.addLog("about", `ລຶບຄຸນຄ່າຫຼັກ '${v.title}' ແລ້ວ`);
      store.save();
      toast.show("ລຶບຄຸນຄ່າຫຼັກສຳເລັດແລ້ວ.");
      router.handleHashChange();
    }
  }
};

window.submitValueForm = function (event) {
  event.preventDefault();
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") {
    toast.show("ຜູ້ກວດສອບບໍ່ມີສິດຈັດການຄຸນຄ່າຫຼັກ.", "danger");
    return;
  }
  const title = document.getElementById("value-form-title").value.trim();
  const desc = document.getElementById("value-form-desc").value.trim();

  if (!title || !desc) {
    toast.show("ກະລຸນາປ້ອນທັງຫົວຂໍ້ ແລະ ຄຳອະທິບາຍ.", "danger");
    return;
  }

  if (editingEntityId) {
    const val = store.db.about.values.find((v) => v.id === editingEntityId);
    if (val) {
      val.title = title;
      val.desc = desc;
      store.addLog("about", `ອັບເດດຄຸນຄ່າຫຼັກ '${title}' ແລ້ວ`);
      toast.show("ອັບເດດຄຸນຄ່າຫຼັກສຳເລັດແລ້ວ.");
    }
  } else {
    const newVal = {
      id: `val-${Date.now()}`,
      title,
      desc,
    };
    store.db.about.values.push(newVal);
    store.addLog("about", `ເພີ່ມຄຸນຄ່າຫຼັກ '${title}' ແລ້ວ`);
    toast.show("ເພີ່ມຄຸນຄ່າຫຼັກໃໝ່ສຳເລັດແລ້ວ.");
  }

  store.save();
  ModalManager.close("modal-value-form");
  router.handleHashChange();
};

// --- 4. ORGANIZATION / TEAM VIEW (CRUD) ---
router.register("#org", (container) => {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  const isReadOnly = role === "checker";

  const sortedTeam = [...store.db.org].sort((a, b) => a.order - b.order);

  container.innerHTML = `
        <div class="section-header">
            <div>
                <p style="font-size:14px; color:var(--text-secondary)">ຈັດການໂຄງສ້າງອົງກອນ, ຄະນະບໍລິຫານ ແລະ ທີມງານຜູ້ນຳ.</p>
            </div>
            ${
              !isReadOnly
                ? `
                <button class="btn btn-primary" id="btn-add-member">
                    ${SVG_ICONS.plus} ເພີ່ມຜູ້ນຳ / ສະມາຊິກ
                </button>
            `
                : ""
            }
        </div>

        <div class="card" style="padding:0; overflow:hidden;">
            <div class="table-responsive">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>ຮູບ/ຊື່</th>
                            <th>ຕຳແໜ່ງ</th>
                            <th>ລາຍລະອຽດ (Bio)</th>
                            <th>ລຳດັບ</th>
                            <th style="text-align:right">ການຈັດການ</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${
                          sortedTeam.length === 0
                            ? `
                            <tr>
                                <td colspan="5" style="text-align:center; padding:40px; color:var(--text-muted);">
                                    ຍັງບໍ່ມີຂໍ້ມູນ.
                                </td>
                            </tr>
                        `
                            : sortedTeam
                                .map(
                                  (member) => `
                            <tr>
                                <td>
                                    <div style="display:flex; align-items:center; gap:12px;">
                                        <div class="team-card-avatar" style="width:40px; height:40px; font-size:16px;">${member.avatar || member.name.substring(0, 2)}</div>
                                        <div style="font-weight:700; color:var(--text-primary);">${member.name}</div>
                                    </div>
                                </td>
                                <td><span style="font-size:13px; font-weight:500">${member.role}</span></td>
                                <td><span style="font-size:12px; color:var(--text-secondary); line-height:1.4">${member.bio}</span></td>
                                <td><span style="font-size:13px;">${member.order}</span></td>
                                <td style="text-align:right">
                                    <div class="btn-group" style="justify-content: flex-end; align-items: center; gap: 8px;">
                                        ${
                                          !isReadOnly
                                            ? `
                                            <button class="btn btn-secondary btn-icon" onclick="editTeamMember('${member.id}')" title="ແກ້ໄຂ">
                                                ${SVG_ICONS.edit}
                                            </button>
                                            <button class="btn btn-danger btn-icon" onclick="deleteTeamMember('${member.id}')" title="ລຶບ">
                                                ${SVG_ICONS.delete}
                                            </button>
                                        `
                                            : "-"
                                        }
                                    </div>
                                </td>
                            </tr>
                        `,
                                )
                                .join("")
                        }
                    </tbody>
                </table>
            </div>
        </div>
    `;

  if (!isReadOnly) {
    const addMemberBtn = container.querySelector("#btn-add-member");
    if (addMemberBtn) {
      addMemberBtn.addEventListener("click", () => {
        editingEntityId = null;
        document.getElementById("member-modal-title").textContent =
          "ເພີ່ມຄະນະບໍລິຫານ/ສະມາຊິກທີມ";
        document.getElementById("member-form").reset();
        const nextOrder =
          store.db.org.length > 0
            ? Math.max(...store.db.org.map((o) => o.order)) + 1
            : 1;
        document.getElementById("member-form-order").value = nextOrder;
        ModalManager.open("modal-member-form");
      });
    }
  }
});

window.editTeamMember = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") return;
  const member = store.db.org.find((m) => m.id === id);
  if (!member) return;

  editingEntityId = id;
  document.getElementById("member-modal-title").textContent =
    "ແກ້ໄຂຄະນະບໍລິຫານ/ສະມາຊິກທີມ";
  document.getElementById("member-form-name").value = member.name;
  document.getElementById("member-form-role").value = member.role;
  document.getElementById("member-form-avatar").value = member.avatar || "";
  document.getElementById("member-form-order").value = member.order;
  document.getElementById("member-form-bio").value = member.bio || "";

  ModalManager.open("modal-member-form");
};

window.deleteTeamMember = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") return;
  if (confirm("ທ່ານແນ່ໃຈບໍວ່າຕ້ອງການລຶບສະມາຊິກນີ້ອອກຈາກຖານຂໍ້ມູນອົງກອນ?")) {
    const index = store.db.org.findIndex((m) => m.id === id);
    if (index > -1) {
      const m = store.db.org[index];
      store.db.org.splice(index, 1);
      store.addLog("org", `ລຶບສະມາຊິກທີມ '${m.name}' ອອກແລ້ວ`);
      store.save();
      toast.show("ລຶບສະມາຊິກທີມສຳເລັດແລ້ວ.");
      router.handleHashChange();
    }
  }
};

window.submitMemberForm = function (event) {
  event.preventDefault();
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") {
    toast.show("ຜູ້ກວດສອບບໍ່ມີສິດຈັດການສະມາຊິກທີມ.", "danger");
    return;
  }
  const name = document.getElementById("member-form-name").value.trim();
  const roleName = document.getElementById("member-form-role").value.trim();
  let avatar = document.getElementById("member-form-avatar").value.trim();
  const order =
    parseInt(document.getElementById("member-form-order").value) || 0;
  const bio = document.getElementById("member-form-bio").value.trim();

  if (!name || !roleName) {
    toast.show("ກະລຸນາປ້ອນຊື່ ແລະ ຕຳແໜ່ງ.", "danger");
    return;
  }

  if (!avatar) {
    avatar = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }

  if (editingEntityId) {
    const m = store.db.org.find((member) => member.id === editingEntityId);
    if (m) {
      m.name = name;
      m.role = roleName;
      m.avatar = avatar;
      m.order = order;
      m.bio = bio;
      store.addLog("org", `ອັບເດດສະມາຊິກທີມ '${name}' ແລ້ວ`);
      toast.show("ອັບເດດລາຍລະອຽດສະມາຊິກສຳເລັດແລ້ວ.");
    }
  } else {
    const newMember = {
      id: `member-${Date.now()}`,
      name,
      role: roleName,
      avatar,
      order,
      bio,
    };
    store.db.org.push(newMember);
    store.addLog("org", `ເພີ່ມສະມາຊິກທີມ '${name}' ເຂົ້າໃນຄະນະບໍລິຫານແລ້ວ`);
    toast.show("ເພີ່ມສະມາຊິກໃໝ່ສຳເລັດແລ້ວ.");
  }

  store.save();
  ModalManager.close("modal-member-form");
  router.handleHashChange();
};

// --- 5. SECTOR VIEW (CRUD) ---
router.register("#sectors", (container) => {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  const isReadOnly = role === "checker";

  container.innerHTML = `
        <div class="section-header">
            <div>
                <p style="font-size:14px; color:var(--text-secondary)">ຈັດການຂະແໜງການທີ່ເຄື່ອນໄຫວ ແລະ ການຕັ້ງຄ່າການດຳເນີນງານຂອງພວກເຂົາ.</p>
            </div>
            ${
              !isReadOnly
                ? `
                <button class="btn btn-primary" id="btn-add-sector">
                    ${SVG_ICONS.plus} ເພີ່ມຂະແໜງການໃໝ່
                </button>
            `
                : ""
            }
        </div>

        <div class="card" style="padding:0; overflow:hidden;">
            <div class="table-responsive">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>ຊື່ຂະແໜງການ</th>
                            <th>ຄຳອະທິບາຍ</th>
                            <th>ສີ/ໄອຄອນ</th>
                            <th>ສະຖານະ</th>
                            <th style="text-align:right">ການຈັດການ</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${
                          store.db.sectors.length === 0
                            ? `
                            <tr>
                                <td colspan="5" style="text-align:center; padding:40px; color:var(--text-muted);">
                                    ຍັງບໍ່ມີຂໍ້ມູນ.
                                </td>
                            </tr>
                        `
                            : store.db.sectors
                                .map(
                                  (sec) => `
                            <tr>
                                <td><div style="font-weight:700; color:var(--text-primary);">${sec.name}</div></td>
                                <td><span style="font-size:12px; color:var(--text-secondary); line-height:1.4">${sec.desc}</span></td>
                                <td>
                                    <div style="display:flex; align-items:center; gap:8px;">
                                        <div class="sector-icon-box" style="color: ${sec.themeColor || "var(--primary)"}; width:32px; height:32px; font-size:16px;">
                                            ${SVG_ICONS[sec.icon] || SVG_ICONS.leaf}
                                        </div>
                                        <span style="font-size:11px; font-weight:700; color:var(--text-muted); font-family:monospace">${sec.themeColor}</span>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge badge-${sec.status}">
                                        ${sec.status === "active" ? "ເປີດໃຊ້ງານ" : "ປິດໃຊ້ງານ"}
                                    </span>
                                </td>
                                <td style="text-align:right">
                                    <div class="btn-group" style="justify-content: flex-end; align-items: center; gap: 8px;">
                                        ${
                                          !isReadOnly
                                            ? `
                                            <button class="btn btn-secondary btn-icon" onclick="editSector('${sec.id}')" title="ແກ້ໄຂ">
                                                ${SVG_ICONS.edit}
                                            </button>
                                            <button class="btn btn-danger btn-icon" onclick="deleteSector('${sec.id}')" title="ລຶບ">
                                                ${SVG_ICONS.delete}
                                            </button>
                                        `
                                            : "-"
                                        }
                                    </div>
                                </td>
                            </tr>
                        `,
                                )
                                .join("")
                        }
                    </tbody>
                </table>
            </div>
        </div>
    `;

  if (!isReadOnly) {
    const addSectorBtn = container.querySelector("#btn-add-sector");
    if (addSectorBtn) {
      addSectorBtn.addEventListener("click", () => {
        editingEntityId = null;
        document.getElementById("sector-modal-title").textContent =
          "ເພີ່ມຂະແໜງການ";
        document.getElementById("sector-form").reset();
        ModalManager.open("modal-sector-form");
      });
    }
  }
});

window.editSector = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") return;
  const sec = store.db.sectors.find((s) => s.id === id);
  if (!sec) return;

  editingEntityId = id;
  document.getElementById("sector-modal-title").textContent = "ແກ້ໄຂຂະແໜງການ";
  document.getElementById("sector-form-name").value = sec.name;
  document.getElementById("sector-form-icon").value = sec.icon;
  document.getElementById("sector-form-color").value =
    sec.themeColor || "#4F46E5";
  document.getElementById("sector-form-status").value = sec.status;
  document.getElementById("sector-form-desc").value = sec.desc;

  ModalManager.open("modal-sector-form");
};

window.deleteSector = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") return;
  if (
    confirm(
      "ທ່ານແນ່ໃຈບໍວ່າຕ້ອງການລຶບຂະແໜງການນີ້? ຂໍ້ມູນທັງໝົດທີ່ກ່ຽວຂ້ອງຈະຖືກແຍກອອກ.",
    )
  ) {
    const index = store.db.sectors.findIndex((s) => s.id === id);
    if (index > -1) {
      const sec = store.db.sectors[index];
      store.db.sectors.splice(index, 1);
      store.addLog("sector", `ລຶບຂະແໜງການ '${sec.name}' ແລ້ວ`);
      store.save();
      toast.show("ລຶບຂະແໜງການສຳເລັດແລ້ວ.");
      router.handleHashChange();
    }
  }
};

window.submitSectorForm = function (event) {
  event.preventDefault();
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") {
    toast.show("ຜູ້ກວດສອບບໍ່ມີສິດຈັດການຂະແໜງການ.", "danger");
    return;
  }
  const name = document.getElementById("sector-form-name").value.trim();
  const icon = document.getElementById("sector-form-icon").value;
  const themeColor = document.getElementById("sector-form-color").value;
  const status = document.getElementById("sector-form-status").value;
  const desc = document.getElementById("sector-form-desc").value.trim();

  if (!name || !desc) {
    toast.show("ກະລຸນາປ້ອນຊື່ຂະແໜງການ ແລະ ຄຳອະທິບາຍ.", "danger");
    return;
  }

  if (editingEntityId) {
    const s = store.db.sectors.find((sec) => sec.id === editingEntityId);
    if (s) {
      s.name = name;
      s.icon = icon;
      s.themeColor = themeColor;
      s.status = status;
      s.desc = desc;
      store.addLog("sector", `ອັບເດດຂະແໜງການ '${name}' ແລ້ວ`);
      toast.show("ອັບເດດຂະແໜງການສຳເລັດແລ້ວ.");
    }
  } else {
    const newSector = {
      id: `sector-${Date.now()}`,
      name,
      icon,
      themeColor,
      status,
      desc,
    };
    store.db.sectors.push(newSector);
    store.addLog("sector", `ສ້າງຂະແໜງການ '${name}' ແລ້ວ`);
    toast.show("ສ້າງຂະແໜງການໃໝ່ສຳເລັດແລ້ວ.");
  }

  store.save();
  ModalManager.close("modal-sector-form");
  router.handleHashChange();
};

// --- 6. ACTIVITIES VIEW (CRUD) ---
router.register("#activities", (container) => {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  const isReadOnly = role === "checker";

  container.innerHTML = `
        <div class="section-header">
            <div>
                <p style="font-size:14px; color:var(--text-secondary)">ຈັດການກຳນົດເວລາແຜນງານ, ກອງປະຊຸມຝຶກອົບຮົມ, ສຳມະນາ ແລະ ກິດຈະກຳພາຍນອກ.</p>
            </div>
            ${
              !isReadOnly
                ? `
                <button class="btn btn-primary" id="btn-add-activity">
                    ${SVG_ICONS.plus} ລົງທະບຽນກິດຈະກຳ
                </button>
            `
                : ""
            }
        </div>

        <div class="card" style="padding:0; overflow:hidden;">
            <div class="table-responsive">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>ລາຍລະອຽດກິດຈະກຳ</th>
                            <th>ວັນທີ & ເວລາ</th>
                            <th>ສະຖານທີ່</th>
                            <th>ຜູ້ປະສານງານ</th>
                            <th>ສະຖານະ</th>
                            <th style="text-align:right">ການຈັດການ</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${
                          store.db.activities.length === 0
                            ? `
                            <tr>
                                <td colspan="6" style="text-align:center; padding:40px; color:var(--text-muted);">
                                    ຍັງບໍ່ມີການລົງທະບຽນກິດຈະກຳເທື່ອ. ສ້າງກິດຈະກຳເພື່ອເລີ່ມຕົ້ນ.
                                </td>
                            </tr>
                        `
                            : store.db.activities
                                .map(
                                  (act) => `
                            <tr>
                                <td style="max-width: 250px;">
                                    <div style="font-weight:700; color:var(--text-primary); margin-bottom:4px;">${act.title}</div>
                                    <div style="font-size:12px; color:var(--text-secondary); line-height:1.4">${act.desc}</div>
                                </td>
                                <td>
                                    <span style="font-family:monospace; font-size:13px">${act.date}</span>
                                    <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">ເວລາ ${act.time}</div>
                                </td>
                                <td><span style="font-size:13px; color:var(--text-secondary)">${act.location}</span></td>
                                <td><span style="font-size:13px; font-weight:500">${act.organizer}</span></td>
                                <td>
                                    <span class="badge badge-${act.status}">
                                        ${act.status === "active" ? "ເປີດໃຊ້ງານ" : act.status === "pending" ? "ລໍຖ້າອະນຸມັດ" : "ເກັບຖາວອນ"}
                                    </span>
                                </td>
                                <td style="text-align:right">
                                    <div class="btn-group" style="justify-content: flex-end; align-items: center; gap: 8px;">
                                        ${
                                          (role === "checker" ||
                                            role === "admin" ||
                                            role === "super_admin") &&
                                          act.status === "pending"
                                            ? `
                                            <button class="btn btn-primary" onclick="approveActivity('${act.id}')" title="ອະນຸມັດ" style="padding: 6px 12px; font-size: 12px; height: 32px;">
                                                ອະນຸມັດ
                                            </button>
                                        `
                                            : ""
                                        }
                                        ${
                                          role !== "checker"
                                            ? `
                                            <button class="btn btn-secondary btn-icon" onclick="editActivity('${act.id}')" title="ແກ້ໄຂ">
                                                ${SVG_ICONS.edit}
                                            </button>
                                            <button class="btn btn-danger btn-icon" onclick="deleteActivity('${act.id}')" title="ລຶບ">
                                                ${SVG_ICONS.delete}
                                            </button>
                                        `
                                            : ""
                                        }
                                    </div>
                                </td>
                            </tr>
                        `,
                                )
                                .join("")
                        }
                    </tbody>
                </table>
            </div>
        </div>
    `;

  if (!isReadOnly) {
    const addActivityBtn = container.querySelector("#btn-add-activity");
    if (addActivityBtn) {
      addActivityBtn.addEventListener("click", () => {
        editingEntityId = null;
        document.getElementById("activity-modal-title").textContent =
          "ລົງທະບຽນກິດຈະກຳ / ງານ";
        document.getElementById("activity-form").reset();

        const statusSelect = document.getElementById("activity-form-status");
        if (statusSelect) {
          if (role === "maker") {
            statusSelect.innerHTML = `
                            <option value="pending">ລໍຖ້າອະນຸມັດ</option>
                        `;
          } else {
            statusSelect.innerHTML = `
                            <option value="active">ເປີດໃຊ້ງານ / ມີກຳນົດການ</option>
                            <option value="pending">ລໍຖ້າອະນຸມັດ</option>
                            <option value="archived">ເກັບຖາວອນ / ຜ່ານມາແລ້ວ</option>
                        `;
          }
        }

        document.getElementById("activity-form-date").value = new Date()
          .toISOString()
          .substring(0, 10);
        document.getElementById("activity-form-time").value = "09:00";
        ModalManager.open("modal-activity-form");
      });
    }
  }
});

window.editActivity = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") return;
  const act = store.db.activities.find((a) => a.id === id);
  if (!act) return;

  editingEntityId = id;
  document.getElementById("activity-modal-title").textContent = "ແກ້ໄຂກິດຈະກຳ";
  document.getElementById("activity-form-title").value = act.title;
  document.getElementById("activity-form-date").value = act.date;
  document.getElementById("activity-form-time").value = act.time;
  document.getElementById("activity-form-location").value = act.location;
  document.getElementById("activity-form-organizer").value = act.organizer;

  const statusSelect = document.getElementById("activity-form-status");
  if (statusSelect) {
    if (role === "maker") {
      statusSelect.innerHTML = `
                <option value="pending">ລໍຖ້າອະນຸມັດ</option>
            `;
    } else {
      statusSelect.innerHTML = `
                <option value="active">ເປີດໃຊ້ງານ / ມີກຳນົດການ</option>
                <option value="pending">ລໍຖ້າອະນຸມັດ</option>
                <option value="archived">ເກັບຖາວອນ / ຜ່ານມາແລ້ວ</option>
            `;
    }
    statusSelect.value = act.status;
  }

  document.getElementById("activity-form-desc").value = act.desc;

  ModalManager.open("modal-activity-form");
};

window.deleteActivity = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") return;
  if (confirm("ທ່ານແນ່ໃຈບໍວ່າຕ້ອງການລຶບລາຍການກິດຈະກຳນີ້?")) {
    const index = store.db.activities.findIndex((a) => a.id === id);
    if (index > -1) {
      const act = store.db.activities[index];
      store.db.activities.splice(index, 1);
      store.addLog("activities", `ລຶບກິດຈະກຳ '${act.title}' ແລ້ວ`);
      store.save();
      toast.show("ລຶບລາຍການກິດຈະກຳສຳເລັດແລ້ວ.");
      router.handleHashChange();
    }
  }
};

window.approveActivity = function (id) {
  const item = store.db.activities.find((a) => a.id === id);
  if (!item) return;

  item.status = "active";
  store.addLog("activities", `ອະນຸມັດກິດຈະກຳ '${item.title}' ແລ້ວ`);
  store.save();
  toast.show("ອະນຸມັດກິດຈະກຳສຳເລັດແລ້ວ.");
  router.handleHashChange();
};

window.submitActivityForm = function (event) {
  event.preventDefault();
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "checker") {
    toast.show("ຜູ້ກວດສອບບໍ່ມີສິດຈັດການກິດຈະກຳ.", "danger");
    return;
  }
  const title = document.getElementById("activity-form-title").value.trim();
  const date = document.getElementById("activity-form-date").value;
  const time = document.getElementById("activity-form-time").value;
  const location = document
    .getElementById("activity-form-location")
    .value.trim();
  const organizer = document
    .getElementById("activity-form-organizer")
    .value.trim();
  const status = document.getElementById("activity-form-status").value;
  const desc = document.getElementById("activity-form-desc").value.trim();

  if (!title || !location || !organizer) {
    toast.show("ກະລຸນາປ້ອນຫົວຂໍ້, ສະຖານທີ່ ແລະ ຜູ້ປະສານງານ.", "danger");
    return;
  }

  if (editingEntityId) {
    const act = store.db.activities.find((a) => a.id === editingEntityId);
    if (act) {
      act.title = title;
      act.date = date;
      act.time = time;
      act.location = location;
      act.organizer = organizer;
      act.status = status;
      act.desc = desc;
      store.addLog("activities", `ອັບເດດກິດຈະກຳ '${title}' ແລ້ວ`);
      toast.show("ອັບເດດລາຍລະອຽດກິດຈະກຳສຳເລັດແລ້ວ.");
    }
  } else {
    const newAct = {
      id: `act-${Date.now()}`,
      title,
      date,
      time,
      location,
      organizer,
      status,
      desc,
    };
    store.db.activities.push(newAct);
    store.addLog("activities", `ລົງທະບຽນກິດຈະກຳ '${title}' ແລ້ວ`);
    toast.show("ລົງທະບຽນກິດຈະກຳໃໝ່ສຳເລັດແລ້ວ.");
  }

  store.save();
  ModalManager.close("modal-activity-form");
  router.handleHashChange();
};

// --- 7. CONTACT MESSAGES VIEW (Inbox System) ---
let activeInboxMessageId = null;

router.register("#contacts", (container) => {
  if (!activeInboxMessageId && store.db.contacts.length > 0) {
    activeInboxMessageId = store.db.contacts[0].id;
  }
  renderContactView(container);
});

function renderContactView(container) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  const activeMsg = store.db.contacts.find(
    (c) => c.id === activeInboxMessageId,
  );

  container.innerHTML = `
        <div class="card" style="padding:0; overflow:hidden;">
            <div class="table-responsive">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>ຜູ້ຕິດຕໍ່ (ອີເມວ)</th>
                            <th>ຫົວຂໍ້</th>
                            <th>ວັນທີ</th>
                            <th>ສະຖານະ</th>
                            <th style="text-align:right">ການຈັດການ</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${
                          store.db.contacts.length === 0
                            ? `
                            <tr>
                                <td colspan="5" style="text-align:center; padding:40px; color:var(--text-muted);">
                                    ກ່ອງຈົດໝາຍເຂົ້າຂອງທ່ານວ່າງເປົ່າ.
                                </td>
                            </tr>
                        `
                            : store.db.contacts
                                .map(
                                  (c) => `
                            <tr class="${c.id === activeInboxMessageId ? "active-row" : ""}" style="${c.status === "unread" ? "font-weight:700; background-color:var(--bg-hover)" : ""}">
                                <td>
                                    <div style="color:var(--text-primary); font-weight:${c.status === "unread" ? "700" : "500"};">${c.name}</div>
                                    <div style="font-size:12px; color:var(--text-secondary);">${c.email}</div>
                                </td>
                                <td><span style="font-size:13px; color:var(--text-primary);">${c.subject}</span></td>
                                <td><span style="font-size:13px; color:var(--text-secondary);">${c.date}</span></td>
                                <td>
                                    <span class="badge badge-${c.status}">
                                        ${c.status === "unread" ? "ຍັງບໍ່ອ່ານ" : c.status === "replied" ? "ຕອບກັບແລ້ວ" : "ກຳລັງດຳເນີນການ"}
                                    </span>
                                </td>
                                <td style="text-align:right">
                                    <div class="btn-group" style="justify-content: flex-end; align-items: center; gap: 8px;">
                                        <button class="btn btn-primary" style="padding:4px 10px; font-size:12px; height:auto;" onclick="selectInboxMessage('${c.id}')">ເປີດອ່ານ</button>
                                        ${
                                          role === "admin" ||
                                          role === "super_admin"
                                            ? `
                                            <button class="btn btn-danger btn-icon" onclick="deleteInboxMessage('${c.id}')" title="ລຶບ">
                                                ${SVG_ICONS.delete}
                                            </button>
                                        `
                                            : ""
                                        }
                                    </div>
                                </td>
                            </tr>
                        `,
                                )
                                .join("")
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
        ${
          activeMsg
            ? `
        <div class="card" style="margin-top:20px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;">
                <div>
                    <h2 style="font-size:18px; margin-bottom:8px; color:var(--text-primary)">${activeMsg.subject}</h2>
                    <div style="font-size:13px; color:var(--text-secondary);">ຈາກ: <strong style="color:var(--text-primary);">${activeMsg.name}</strong> (${activeMsg.email})</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:8px;">${activeMsg.date}</div>
                    ${
                      role !== "maker"
                        ? `
                        <button class="btn btn-secondary" style="padding:6px 12px; font-size:12px; height:auto;" onclick="simulateReplyMessage('${activeMsg.id}')">
                            ${SVG_ICONS.reply} ຕອບກັບ
                        </button>
                    `
                        : ""
                    }
                </div>
            </div>
            <div style="padding:16px; background-color:var(--bg-card); border-radius:6px; font-size:14px; line-height:1.6; color:var(--text-primary); border:1px solid var(--border-color); box-shadow:inset 0 2px 4px rgba(0,0,0,0.02);">
                ${activeMsg.message.replace(/\\n/g, "<br>")}
            </div>
        </div>
        `
            : ""
        }
    `;
}

window.selectInboxMessage = function (id) {
  const msg = store.db.contacts.find((c) => c.id === id);
  if (msg) {
    activeInboxMessageId = id;
    if (msg.status === "unread") {
      msg.status = "pending";
      store.save();
    }
    router.handleHashChange();
  }
};

window.deleteInboxMessage = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role !== "admin" && role !== "super_admin") {
    toast.show("ທ່ານບໍ່ມີສິດລຶບຂໍ້ຄວາມຕິດຕໍ່.", "danger");
    return;
  }
  if (confirm("ທ່ານແນ່ໃຈບໍວ່າຕ້ອງການລຶບຂໍ້ຄວາມນີ້ຢ່າງຖາວອນ?")) {
    const index = store.db.contacts.findIndex((c) => c.id === id);
    if (index > -1) {
      const msg = store.db.contacts[index];
      store.db.contacts.splice(index, 1);
      store.addLog("contact", `ລຶບຂໍ້ຄວາມຈາກ '${msg.name}' ແລ້ວ`);
      store.save();
      toast.show("ລຶບຂໍ້ຄວາມສຳເລັດແລ້ວ.");
      activeInboxMessageId =
        store.db.contacts.length > 0 ? store.db.contacts[0].id : null;
      router.handleHashChange();
    }
  }
};

window.simulateReplyMessage = function (id) {
  const role = localStorage.getItem("CURRENT_USER_ROLE") || "super_admin";
  if (role === "maker") {
    toast.show("ຜູ້ສ້າງບໍ່ມີສິດຕອບກັບຂໍ້ຄວາມ.", "danger");
    return;
  }
  const msg = store.db.contacts.find((c) => c.id === id);
  if (!msg) return;

  const replyBody = prompt(
    `ສົ່ງອີເມວຕອບກັບຫາ ${msg.name} (${msg.email}):\n\nຫົວຂໍ້: Re: ${msg.subject}\n\nພິມຂໍ້ຄວາມຕອບກັບຂອງທ່ານໃສ່ລຸ່ມນີ້:`,
  );
  if (replyBody && replyBody.trim() !== "") {
    msg.status = "replied";
    store.addLog("contact", `ຕອບກັບຂໍ້ຄວາມຕິດຕໍ່ຈາກ '${msg.name}' ແລ້ວ`);
    store.save();
    toast.show(`ສົ່ງອີເມວຕອບກັບຫາ ${msg.email} ສຳເລັດແລ້ວ.`);
    router.handleHashChange();
  }
};

// ==========================================
// THEME SWITCHER & CORE INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize User Role
  initializeUserRole();

  // Theme setup
  const storedTheme = localStorage.getItem("THEME_PREFERENCE") || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);

  // Bind sidebar collapse
  const collapseBtn = document.getElementById("btn-collapse-sidebar");
  const sidebar = document.querySelector("aside");
  if (collapseBtn && sidebar) {
    collapseBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  // Bind Mobile Menu Burger Toggle
  const mobileToggle = document.getElementById("mobile-burger-btn");
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener("click", () => {
      sidebar.classList.toggle("mobile-open");
    });
  }

  // Bind Theme Button
  const themeBtn = document.getElementById("btn-theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const target = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", target);
      localStorage.setItem("THEME_PREFERENCE", target);
      toast.show(
        `ປ່ຽນເປັນຮູບແບບ ${target === "dark" ? "ກາງຄືນ" : "ກາງເວັນ"} ສຳເລັດແລ້ວ.`,
      );
    });
  }

  // Set up modal closing clicks
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        ModalManager.close(overlay.id);
      }
    });
  });

  // Initialize Router
  router.handleHashChange();
});
