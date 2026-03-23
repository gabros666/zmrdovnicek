const audioFiles = [
  "001.Nechutný_prase.mp3",
  "002.Kourim_mrkev.mp3",
  "003.Vsechno_nejlepsi.mp3",
  "004.Vasicek.mp3",
  "005.Zvonim.mp3",
  "006.Benesov.mp3",
  "007.Tlustej_zmrd.mp3",
  "008.Je_to_curak.mp3",
  "009.Haj_hitla.mp3",
  "010.Ty_pyco.mp3",
  "011.Doma_vysrat.mp3",
  "012.Nazdar_bobino.mp3",
  "013.Kundo.mp3",
  "014.Vyborne.mp3",
  "015.Kurva_do_pice.mp3",
  "016.Nebudu_to_delat.mp3",
  "017.Poblil_sem_si.mp3",
  "018.Nekulturni_hovada.mp3",
  "019.Banda_zmrdu.mp3",
  "020.Od_osmi_od_rana.mp3",
  "021.Tak_sem_se_poblil.mp3",
  "022.Pochcal_Tobiho.mp3",
  "023.To_je_dzungle.mp3",
  "024.Je_kozy.mp3",
  "025.Hej_ty_mrdko.mp3",
  "026.Ty_buzerante.mp3",
  "027.Na_tebe_mluvim.mp3",
  "028.Pekne_tlustej_zmrd.mp3",
  "029.Tlustou_svini.mp3",
  "030.Ty_kundyhvizde.mp3",
  "031.Vykouris_mi.mp3",
  "032.Se_nebavis.mp3",
  "033.Pes_co_mnouka.mp3",
  "034.Trendyzmrd.mp3",
  "035.Na_naplavku.mp3",
  "036.Moka_kapucino.mp3",
  "037.Je_zima.mp3",
  "038.Zase_sukas.mp3",
  "039.Ostrostrelec.mp3",
  "040.Dalekohled.mp3",
  "041.Mam_prujem.mp3",
  "042.Tos_posral.mp3",
  "043.Hej_prde.mp3",
  "044.Jarmile.mp3",
  "045.Co_delas.mp3",
  "046.Jdu_do_sprchy.mp3",
  "047.S_kym_podvadis.mp3",
  "048.Dohonkal.mp3",
  "049.Cepicari.mp3",
  "050.Zada_ne.mp3",
  "051.Protahnu_kadak.mp3",
  "052.Se_boji.mp3",
  "053.Si_naserte.mp3",
  "054.Si_delas_prdel.mp3",
  "055.Hej_kamo.mp3",
  "056.Sem_honil.mp3",
  "057.Ja_vim.mp3",
  "058.Do_pici_delej.mp3",
  "059.Zacina_chcat.mp3",
  "060.Uz_jed.mp3",
  "061.Co_je_kamo.mp3",
  "062.Hej_kundyhvizde.mp3",
  "063.Co_se_smejes.mp3",
  "064.Chci_se_vysrat.mp3",
  "065.Pindoura_do_huby.mp3",
  "066.Stalo_za_picu.mp3",
  "067.Ale_picu_vole.mp3",
  "068.Vsechno_nejlepsi_kundo.mp3",
  "069.Pesky_ze_zlebu.mp3",
  "070.Ja_asi_nemam_hlad.mp3",
  "071.Banda_zmrdu.mp3",
  "072.Hahahaha.mp3",
  "073.Tvuj_parecek.mp3",
  "074.Krk_haha.mp3",
  "075.Nic_neposlu.mp3",
  "076.Poserte_se.mp3",
  "077.Medovnicek_kdy.mp3",
  "078.Pipinko.mp3",
  "079.Koupis_medovnicek.mp3",
  "080.Chut_medovnicek.mp3",
  "081.My_parents.mp3",
  "082.At_me_neserou.mp3",
  "083.Je_to_hrozny.mp3",
  "084.Chtel_sem_se_projit.mp3",
  "085.Vy_kravy.mp3",
  "086.Muj_kamionak.mp3",
  "087.Vcera_dnes_zitra.mp3",
  "088.Prisly_dane.mp3",
  "089.Jak_to_vypada.mp3",
  "090.Raketa.mp3",
  "091.Co_je_do_pici.mp3",
  "092.Hovno_buzerant.mp3",
  "093.Hahahaha.mp3",
  "094.Jarmile_sjedeme_se.mp3",
  "095.Skrekot.mp3",
  "096.Hej_kamo.mp3",
  "097.Pridusit.mp3",
  "098.Vomlat_ji_hlavou.mp3",
  "099.Pilot_do_pici.mp3",
  "100.Delas_si_ze_me_prdel.mp3",
  "101.Vstavej_mrdkokoko.mp3",
  "102.Buzerant_to_je.mp3",
  "103.Prohnana_lasice.mp3",
  "104.Pali_jako_pica.mp3",
  "105.Zatim_tuhon.mp3",
  "106.Bude_laska.mp3",
  "107.Posranej_zivot.mp3",
  "108.Nikam_nejdu.mp3",
  "109.Prezranej_jako_prase.mp3",
  "110.Polib_mi.mp3",
  "111.Basnik.mp3",
  "112.Se_vykoupes.mp3",
  "113.Jedem_vole.mp3",
  "114.Uz_nepiju.mp3",
  "115.mas_curaka.mp3",
  "116.Vy_dve_buzny.mp3",
  "117.Kundohvizde.mp3",
  "118.Co_je_ty_kundo.mp3",
  "119.Ty_mas_buchtu.mp3",
  "120.Prestan_srat_z_huby.mp3",
  "121.Vitamin_K.mp3",
  "122.story1.mp3",
  "123.story2.mp3",
  "124.story3.mp3",
  "125.sleeper.mp3",
  "126.to_je_zmrd.mp3",
  "127.bych_nechtel.mp3",
  "128.krk.mp3",
  "129.ty_curaku.mp3",
  "130.horecka_sobotni_noci.mp3",
  "131.Hej_darbujani.mp3",
  "132.kdo_je_u_tebe_zmrd.mp3",
  "133.udelam_strilecku.mp3",
  "134.bad_boys.mp3",
  "135.mnam_do_pici.mp3",
  "136.tvoje_hovinka.mp3",
  "137.prvni_liga.mp3",
  "138.koukej_co_poslu.mp3",
  "139.zkoledovanej.mp3",
  "140.postando.mp3",
  "141.demoni_v_ldv.mp3",
  "142.natrhlou_prdel.mp3",
  "143.ty_bando.mp3",
  "144.archivni_krabicacek.mp3",
  "145.bez_komentare.mp3",
  "146.redena_desitka.mp3",
  "147.patecni_sedanek.mp3",
  "148.drony.mp3",
  "149.vecer_pokracujem.mp3",
  "150.hovno_vyklusava.mp3",
  "151.jdi_do_prdele_jindrichu.mp3",
  "152.vylet_pro_medovnicek.mp3",
  "153.co_ty_burty.mp3",
  "154.zmrdskej_smich.mp3",
  "155.chlast_si_nevybira.mp3",
  "156.delat_rojnici.mp3",
  "157.to_je_v_pyci.mp3",
  "158.mam_zacpu.mp3",
  "159.to_neni_sperma.mp3",
  "160.co_zas_ja.mp3",
  "161.privezes_kebab.mp3",
  "162.ses_kokot.mp3",
  "163.velky_spatny.mp3",
  "164.hardcore_ty_pyco.mp3",
  "165.tak_to_do_prdele.mp3",
  "166.alkoholik.mp3",
  "167.zhubnout.mp3",
];

const groupConfigs = [
  { title: "Blok 1", subtitle: "Hlasky 001 az 028", start: 1, end: 28, colors: ["#ce5d35", "#e98b59"] },
  { title: "Blok 2", subtitle: "Hlasky 029 az 056", start: 29, end: 56, colors: ["#2f7e6d", "#58b39f"] },
  { title: "Blok 3", subtitle: "Hlasky 057 az 084", start: 57, end: 84, colors: ["#8b5f24", "#d19b4f"] },
  { title: "Blok 4", subtitle: "Hlasky 085 az 112", start: 85, end: 112, colors: ["#7f4658", "#bc7289"] },
  { title: "Blok 5", subtitle: "Hlasky 113 az 140", start: 113, end: 140, colors: ["#3d5d9a", "#6d90d4"] },
  { title: "Blok 6", subtitle: "Hlasky 141 az 167", start: 141, end: 167, colors: ["#5f6540", "#94a465"] },
];

const HOLD_DELAY = 350;
const DEFAULT_STATUS = "Klik pro prehrani, podrz pro sdileni";
const soundSections = document.getElementById("soundSections");
const soundCount = document.getElementById("soundCount");
const soundSearch = document.getElementById("soundSearch");
let activePlayback = null;

const sounds = audioFiles.map((fileName) => createSound(fileName));
const groups = groupConfigs.map((config) => ({
  ...config,
  sounds: sounds.filter((sound) => sound.index >= config.start && sound.index <= config.end),
}));

renderSections();
soundCount.textContent = `${sounds.length} hlasek`;
soundSearch.addEventListener("input", filterSounds);

function createSound(fileName) {
  const match = fileName.match(/^(\d{3})\.(.+)\.mp3$/i);
  const number = match ? match[1] : "000";
  const rawTitle = match ? match[2] : fileName.replace(/\.mp3$/i, "");

  return {
    id: `sound-${number}`,
    index: Number(number),
    number,
    title: formatTitle(rawTitle),
    fileName,
    src: `assets/${encodeURIComponent(fileName)}`,
    audio: createAudio(fileName),
  };
}

function createAudio(fileName) {
  const audio = new Audio(`assets/${encodeURIComponent(fileName)}`);
  audio.preload = "metadata";
  audio.addEventListener("error", () => {
    console.warn(`Audio se nepodarilo nacist: ${fileName}`, audio.error);
  });
  return audio;
}

function formatTitle(value) {
  return value.replaceAll("_", " ");
}

function renderSections() {
  soundSections.innerHTML = "";

  for (const group of groups) {
    const section = document.createElement("section");
    section.className = "sound-group";
    section.style.setProperty("--group-top", group.colors[0]);
    section.style.setProperty("--group-bottom", group.colors[1]);

    section.innerHTML = `
      <div class="group-header">
        <div class="group-title-row">
          <div>
            <h2>${group.title}</h2>
            <p class="group-subtitle">${group.subtitle}</p>
          </div>
          <span class="group-badge">${group.sounds.length}</span>
        </div>
      </div>
      <div class="sound-grid"></div>
    `;

    const grid = section.querySelector(".sound-grid");

    for (const sound of group.sounds) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sound-card";
      button.dataset.soundId = sound.id;
      button.dataset.search = `${sound.number} ${sound.title}`.toLowerCase();
      button.innerHTML = `
        <span class="index">#${sound.number}</span>
        <span class="title">${sound.title}</span>
        <span class="status">${DEFAULT_STATUS}</span>
      `;

      attachInteractions(button, sound);
      grid.appendChild(button);
    }

    soundSections.appendChild(section);
  }
}

function filterSounds() {
  const query = soundSearch.value.trim().toLowerCase();
  const sections = soundSections.querySelectorAll(".sound-group");
  let visibleCount = 0;

  for (const section of sections) {
    const buttons = section.querySelectorAll(".sound-card");
    let sectionVisibleCount = 0;

    for (const button of buttons) {
      const matches = query === "" || button.dataset.search.includes(query);
      button.hidden = !matches;
      if (matches) {
        sectionVisibleCount += 1;
        visibleCount += 1;
      }
    }

    section.classList.toggle("is-hidden", sectionVisibleCount === 0);
    const badge = section.querySelector(".group-badge");
    if (badge) {
      badge.textContent = sectionVisibleCount;
    }
  }

  soundCount.textContent = query ? `${visibleCount} nalezeno` : `${sounds.length} hlasek`;
}

function attachInteractions(button, sound) {
  let holdTimer = null;
  let shareTriggered = false;
  let holdReady = false;

  const startHold = () => {
    shareTriggered = false;
    holdReady = false;
    button.classList.add("is-sharing");
    holdTimer = window.setTimeout(async () => {
      holdReady = true;
      setStatus(button, "Pust pro sdileni");
    }, HOLD_DELAY);
  };

  const stopHold = () => {
    button.classList.remove("is-sharing");
    window.clearTimeout(holdTimer);
    holdTimer = null;
  };

  button.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }
    startHold();
  });

  button.addEventListener("pointerup", async () => {
    stopHold();
    if (holdReady) {
      shareTriggered = true;
      holdReady = false;
      await shareSound(sound, button);
      return;
    }

    if (!shareTriggered) {
      await playSound(sound, button);
    }
  });

  button.addEventListener("pointerleave", stopHold);
  button.addEventListener("pointercancel", stopHold);
  button.addEventListener("contextmenu", (event) => event.preventDefault());
}

async function playSound(sound, button) {
  if (activePlayback && activePlayback.sound.id !== sound.id) {
    stopSound(activePlayback.sound, activePlayback.button);
  }

  if (!sound.audio.paused) {
    setStatus(button, "Zvuk uz hraje");
    return;
  }

  sound.audio.load();

  try {
    sound.audio.currentTime = 0;
    button.classList.add("is-playing");
    setStatus(button, "Prehrava se");
    activePlayback = { sound, button };
    await sound.audio.play();
  } catch (error) {
    console.error(error);
    button.classList.remove("is-playing");
    if (activePlayback && activePlayback.sound.id === sound.id) {
      activePlayback = null;
    }
    setStatus(button, getPlaybackErrorLabel(sound.audio));
    return;
  }

  sound.audio.onended = () => {
    resetButtonState(sound, button);
  };

  sound.audio.onpause = () => {
    if (sound.audio.ended) {
      return;
    }
    resetButtonState(sound, button);
  };
}

async function shareSound(sound, button) {
  try {
    const response = await fetch(sound.src);

    if (!response.ok) {
      throw new Error(`Soubor ${sound.fileName} nebyl nalezen`);
    }

    const blob = await response.blob();
    const file = new File([blob], sound.fileName, { type: blob.type || "audio/mpeg" });

    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: sound.title,
        text: `Posilam zvuk ${sound.title}`,
        files: [file],
      });
      setStatus(button, "Sdileni otevreno");
      return;
    }

    if (navigator.share) {
      await navigator.share({
        title: sound.title,
        text: `Otevri zvuk: ${new URL(sound.src, window.location.href).href}`,
      });
      setStatus(button, "Sdileni odkazu otevreno");
      return;
    }

    await fallbackShare(sound, button);
  } catch (error) {
    if (error && error.name === "AbortError") {
      setStatus(button, "Sdileni zruseno");
      return;
    }

    console.error(error);
    await fallbackShare(sound, button);
  }
}

function setStatus(button, text) {
  const status = button.querySelector(".status");
  if (status) {
    status.textContent = text;
  }
}

function stopSound(sound, button) {
  sound.audio.pause();
  sound.audio.currentTime = 0;
  resetButtonState(sound, button);
}

function resetButtonState(sound, button) {
  button.classList.remove("is-playing");
  setStatus(button, DEFAULT_STATUS);
  if (activePlayback && activePlayback.sound.id === sound.id) {
    activePlayback = null;
  }
}

function getPlaybackErrorLabel(audio) {
  if (audio.error && audio.error.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
    return "Format se nepodarilo prehrat";
  }

  return "Nepodarilo se prehrat";
}

async function fallbackShare(sound, button) {
  const absoluteUrl = new URL(sound.src, window.location.href).href;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(absoluteUrl);
      setStatus(button, "Odkaz zkopirovan, MP3 se stahuje");
    } else {
      setStatus(button, "MP3 se stahuje");
    }
  } catch (error) {
    console.error(error);
    setStatus(button, "MP3 se stahuje");
  }

  triggerDownload(sound);
}

function triggerDownload(sound) {
  const link = document.createElement("a");
  link.href = sound.src;
  link.download = sound.fileName;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}
