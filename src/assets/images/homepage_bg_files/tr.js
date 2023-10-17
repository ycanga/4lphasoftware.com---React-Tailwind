(function(global){var Language = {};

Language.pluralFormFunction = function (n) {
		return 'other';
	};


Language.bubble = Language.bubble || {};

Language.bubble.attention_grabber = {
	"message": "Sohbet dikkat yakalayıcısı"
};


Language.chat = Language.chat || {};

Language.chat.Warning = {
	"message": "Uyarı"
};
Language.chat.accept_call = {
	"message": "Kabul Et"
};
Language.chat.active = {
	"message": "Aktif"
};
Language.chat.agent_profile_image = {
	"message": "Temsilci profil fotoğrafı"
};
Language.chat.agent_ringing = {
	"message": "Gelen Çağrı"
};
Language.chat.all_conversations = {
	"message": "Tüm konuşmaları görün"
};
Language.chat.call_end_details = {
	"message": "#startedOn saatinde başladı ve #duration sürdü",
	"vars": [
		"startedOn",
		"duration"
	]
};
Language.chat.call_error_load = {
	"message": "Çağrı ayrıntılar yüklenemiyor."
};
Language.chat.call_started_on = {
	"message": "#startedOn saatinde başladı",
	"vars": [
		"startedOn"
	]
};
Language.chat.chatEnded = {
	"message": "Sohbetiniz sona erdi."
};
Language.chat.chat_icon = {
	"message": "Sohbet simgesi"
};
Language.chat.chat_qm = {
	"message": "Sohbet?"
};
Language.chat.chat_text = {
	"message": "Sohbet"
};
Language.chat.close_icon = {
	"message": "Kapatma simgesi"
};
Language.chat.completed_call = {
	"message": "Çağrı sona erdi"
};
Language.chat.conversation_ended_on = {
	"message": "Sohbet bitti"
};
Language.chat.decline_call = {
	"message": "Reddet"
};
Language.chat.defaultName = {
	"message": "Siz (ismi değiştir)"
};
Language.chat.departmentIsAway = {
	"message": "Departman #strongStart #departmentName #strongEnd şu anda dışarıda.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.departmentIsOffline = {
	"message": "Departman #strongStart #departmentName #strongEnd şu anda çevrimdışı. Başka bir departmana yönlendirilebilirsiniz.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.download = {
	"message": "İndir"
};
Language.chat.downloadFile = {
	"message": "Dosyayı İndir"
};
Language.chat.dragDropText = {
	"message": "Dosyaları buraya sürükleyin ve bırakın"
};
Language.chat.emoji_error_load = {
	"message": "Emojiler yüklenemiyor"
};
Language.chat.error_title = {
	"message": "Hata"
};
Language.chat.failed = {
	"message": "Başarısız"
};
Language.chat.generalUploadError = {
	"message": "\"#fileName\", lütfen tekrar deneyin.",
	"vars": [
		"fileName"
	]
};
Language.chat.generalUploadErrorLabel = {
	"message": "Dosya yüklenemedi"
};
Language.chat.goToLatest = {
	"message": "En sonuncuya git"
};
Language.chat.hideButton = {
	"message": "Sohbeti Gizle"
};
Language.chat.incoming_call_message = {
	"message": "#name kişisinden gelen çağrı",
	"vars": [
		"name"
	]
};
Language.chat.insert_emoji = {
	"message": "Emoji ekle"
};
Language.chat.justNow = {
	"message": "şu anda"
};
Language.chat.limit2 = {
	"message": "Mobil tarayıcılar için maksimum dosya boyutu 2 MB 'dır. Lütfen daha küçük boyutta bir dosya yükleyin."
};
Language.chat.limit50 = {
	"message": "Maksimum dosya boyutu 50 MB'dır. Lütfen daha küçük boyutta bir dosya yükleyin."
};
Language.chat.message_not_delivered = {
	"message": "İleti teslim edilemedi, tekrar göndermek için tıklayın."
};
Language.chat.message_too_long = {
	"message": "İleti 5000 karakterden fazla olamaz"
};
Language.chat.missed_agent = {
	"message": "Cevapsız Çağrı"
};
Language.chat.missed_visitor = {
	"message": "Bir çağrıyı kaçırdınız"
};
Language.chat.missed_visitor_messagePreview = {
	"message": "Şu kişiden bir cevapsız çağrınız var"
};
Language.chat.mobileName = {
	"message": "Siz"
};
Language.chat.newChat = {
	"message": "Yeni Sohbet Başlat"
};
Language.chat.newMessages = {
	"message": "Yeni Mesajlar"
};
Language.chat.new_conversation = {
	"message": "Yeni Görüşme"
};
Language.chat.notificationTitle = {
	"message": "bildirim"
};
Language.chat.ongoing_call = {
	"message": "Devam Eden Çağrı"
};
Language.chat.past = {
	"message": "#time önce",
	"vars": [
		"time"
	]
};
Language.chat.pasted_image_title = {
	"message": "#dateTime tarihinde yapıştırılan resim",
	"vars": [
		"dateTime"
	]
};
Language.chat.profile_prechat_text = {
	"message": "Sohbete başlamak için lütfen aşağıdaki formu doldurun."
};
Language.chat.rejected_call = {
	"message": "Çağrıyı reddettiniz"
};
Language.chat.remove_rate = {
	"message": "Bu konuşmayla ilgili puanlamanız geri alınmıştır."
};
Language.chat.resend = {
	"message": "Tekrar gönder"
};
Language.chat.retry = {
	"message": "Yeniden deneyin."
};
Language.chat.return_to_live_chat = {
	"message": "Canlı sohbete dön"
};
Language.chat.say_something = {
	"message": "Bir cevap yazın..."
};
Language.chat.screen_share_error = {
	"message": "Ekran paylaşımı yapılamıyor."
};
Language.chat.send_mail = {
	"message": "E posta Gönder"
};
Language.chat.sent_file = {
	"message": "Dosya gönder"
};
Language.chat.today_time = {
	"message": "Bugün, #time",
	"vars": [
		"time"
	]
};
Language.chat.tryAgain = {
	"message": "Tekrar deneyin."
};
Language.chat.unanswered = {
	"message": "Cevaplanmamış"
};
Language.chat.uploading = {
	"message": "Yüklüyor..."
};
Language.chat.video_call_error = {
	"message": "Video çağrısı kullanılabilir değil."
};
Language.chat.visitor_ringing = {
	"message": "Aranıyor..."
};
Language.chat.voice_call_error = {
	"message": "Sesli Çağrı kullanılabilir değil."
};
Language.chat.we_are_live = {
	"message": "Şu anda çevrimiçiyiz ve sizinle sohbet etmek için hazırız. Canlı sohbet başlatmak için bir şeyler yazın."
};


Language.days = Language.days || {};

Language.days['0'] = {
	"message": "Pazar"
};
Language.days['1'] = {
	"message": "Pazartesi"
};
Language.days['2'] = {
	"message": "Salı"
};
Language.days['3'] = {
	"message": "Çarşamba"
};
Language.days['4'] = {
	"message": "Perşembe"
};
Language.days['5'] = {
	"message": "Cuma"
};
Language.days['6'] = {
	"message": "Cumartesi"
};


Language.form = Language.form || {};

Language.form.CancelButton = {
	"message": "İptal"
};
Language.form.CloseButton = {
	"message": "Kapat"
};
Language.form.DepartmentsErrorMessage = {
	"message": "Birim gerekli."
};
Language.form.DepartmentsPlaceholder = {
	"message": "birim seçin.."
};
Language.form.EmailErrorMessage = {
	"message": "Geçersiz e-posta adresi."
};
Language.form.EmailPlaceholder = {
	"message": "E-posta Adresi"
};
Language.form.EmailTranscriptFormMessage = {
	"message": "Bu sohbetin e-posta adresinize gönderilmesi için lütfen aşağıdaki formu doldurun."
};
Language.form.EmailTranscriptSuccess = {
	"message": "E-posta transkript isteği gönderildi."
};
Language.form.EmailTranscriptTo = {
	"message": "Konuşmayı E-posta ile gönder"
};
Language.form.EndChatMessage = {
	"message": "Bizimle sohbet ettiğiniz için teşekkür ederiz. Yeni bir görüşme başlatabilir ya da e-posta adresinizi girerek bu görüşmenin bir dökümünü posta kutunuza iletebilirsiniz."
};
Language.form.EndChatMessage2 = {
	"message": "Bizimle sohbet ettiğiniz için teşekkür ederiz. Yeni bir sohbet başlatmaktan çekinmeyin."
};
Language.form.EndChatTitle = {
	"message": "Bu sohbeti sonlandırmak istediğinize emin misiniz?"
};
Language.form.MessagePlaceholder = {
	"message": "mesajınız.."
};
Language.form.NameErrorMessage = {
	"message": "İsim gerekli."
};
Language.form.NameFormMessage = {
	"message": "Lütfen sizi bir sonraki sefer tanıyabilmemiz için isminizi değiştirin."
};
Language.form.OfflineFormMessage = {
	"message": "Lütfen aşağıdaki formu doldurun. Mümkün olan en kısa sürede size geri döneceğiz."
};
Language.form.OfflineMessageNotSent = {
	"message": "Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
};
Language.form.OfflineMessageSent = {
	"message": "Mesajınız başarıyla gönderilmiştir!"
};
Language.form.PhoneErrorMessage = {
	"message": "Geçersiz telefon numarası"
};
Language.form.PreChatFormMessage = {
	"message": "Müsait olan en yakın birimle sohbete başlamak için lütfen aşağıdaki formu doldurun."
};
Language.form.PreChatFormMessageProfile = {
	"message": "Bizimle sohbete başlamak için lütfen aşağıdaki formu doldurun."
};
Language.form.QuestionPlaceholder = {
	"message": "Mesajınız..."
};
Language.form.RequiredErrorMessage = {
	"message": "Bu alan gereklidir"
};
Language.form.SaveButton = {
	"message": "Kaydet"
};
Language.form.SendButton = {
	"message": "Gönder"
};
Language.form.SendMessage = {
	"message": "Mesaj gönder"
};
Language.form.StartChatButton = {
	"message": "Sohbete Başla"
};
Language.form.SubmitButton = {
	"message": "Gönder"
};
Language.form.SubmittedFrom = {
	"message": "Gönderen:"
};
Language.form.SubmittingProcess = {
	"message": "Gönderiliyor"
};
Language.form.TranscriptMessage = {
	"message": "E-posta adresinizi girerek bu görüşmenin bir dökümünü posta kutunuza iletebilirsiniz."
};
Language.form.any = {
	"message": "Herhangi bir"
};
Language.form.chatEnded = {
	"message": "Görüşme sona erdi"
};
Language.form.department = {
	"message": "Departman"
};
Language.form.email = {
	"message": "E-posta"
};
Language.form.errorSaving = {
	"message": "Kaydedilemedi. Lütfen tekrar deneyin"
};
Language.form.message = {
	"message": "İleti"
};
Language.form.name = {
	"message": "İsim"
};
Language.form.sendAgain = {
	"message": "Tekrar Gönder"
};
Language.form.visitButton = {
	"message": "Tawk.to'yu ziyaret edin"
};


Language.home = Language.home || {};

Language.home.banner_image = {
	"message": "Banner görseli"
};
Language.home.chat_button = {
	"message": "Yeni Konuşma"
};
Language.home.chat_input = {
	"message": "Buraya yazın ve enter'a basın.."
};
Language.home.heading_main = {
	"message": "Merhaba 👋"
};
Language.home.heading_sub = {
	"message": "Yardıma mı ihtiyacınız var? Cevaplar için yardım merkezimize göz atın veya bir konuşma başlatın:"
};
Language.home.kb_search = {
	"message": "Cevap ara"
};
Language.home.logo_image = {
	"message": "Logo görseli"
};


Language.kb = Language.kb || {};

Language.kb.article_image = {
	"message": "Makale fotoğrafı"
};
Language.kb.article_rating = {
	"message": "Bu makale size yardımcı oldu mu?"
};
Language.kb.article_rating_count = {
	"message": "#totalVotes kişiden#totalLikes kişi bu makaleyi beğendi",
	"vars": [
		"totalLikes",
		"totalVotes"
	]
};
Language.kb.author_profile_image = {
	"message": "Yazar profil fotoğrafı"
};
Language.kb.clear_search = {
	"message": "Aramayı Temizle"
};
Language.kb.downvote_rating_button = {
	"message": "Hayır"
};
Language.kb.help_center = {
	"message": "Yardım Merkezi"
};
Language.kb.negative_rating = {
	"message": "Negatif"
};
Language.kb.positive_rating = {
	"message": "Pozitif"
};
Language.kb.recent_searches = {
	"message": "Son Aramalar"
};
Language.kb.search_fail_description = {
	"message": "Lütfen tekrar deneyin."
};
Language.kb.search_fail_title = {
	"message": "Arama sonucu bulunamadı"
};
Language.kb.search_placeholder = {
	"message": "Cevap ara"
};
Language.kb.search_results = {
	"message": "Arama Sonuçları"
};
Language.kb.show_all_results = {
	"message": "Tüm sonuçları göster (#num)",
	"vars": [
		"num"
	]
};
Language.kb.submit_search = {
	"message": "Aramayı Gönder"
};
Language.kb.upvote_rating_button = {
	"message": "Evet"
};
Language.kb.view_full = {
	"message": "Tam olarak görüntüle"
};


Language.menu = Language.menu || {};

Language.menu.add_chat_to_your_website = {
	"message": "Sohbeti websitenize ekleyin"
};
Language.menu.change_name = {
	"message": "İsim Değiştir"
};
Language.menu.email_transcript = {
	"message": "Transkritpi e-posta ile gönder"
};
Language.menu.end_chat_session = {
	"message": "Bu sohbet oturumunu sonlandır"
};
Language.menu.popout_widget = {
	"message": "Ayrı görüşme penceresi"
};
Language.menu.sound_off = {
	"message": "Ses kapalı"
};
Language.menu.sound_on = {
	"message": "Ses Açık"
};


Language.months = Language.months || {};

Language.months['0'] = {
	"message": "Ocak"
};
Language.months['1'] = {
	"message": "Şubat"
};
Language.months['10'] = {
	"message": "Kasım"
};
Language.months['11'] = {
	"message": "Aralık"
};
Language.months['2'] = {
	"message": "Mart"
};
Language.months['3'] = {
	"message": "Nisan"
};
Language.months['4'] = {
	"message": "Mayıs"
};
Language.months['5'] = {
	"message": "Haziran"
};
Language.months['6'] = {
	"message": "Temmuz"
};
Language.months['7'] = {
	"message": "Ağustos"
};
Language.months['8'] = {
	"message": "Eylül"
};
Language.months['9'] = {
	"message": "Ekim"
};


Language.notifications = Language.notifications || {};

Language.notifications.dismiss_alert = {
	"message": "Uyarıyı Kapat"
};
Language.notifications.maximum_file_upload_warning = {
	"message": "Üzgünüm, bir defada en çok #limitFileNumber dosya transfer edilebilir. Lütfen aşağıdaki dosyaları tekrar deneyin :",
	"vars": [
		"limitFileNumber"
	]
};
Language.notifications.maximum_size_upload_warning = {
	"message": "Dosya aktarımı dosya başına #limitFileSize ile sınırlandırılmıştır. Lütfen ilgili dosya ya da dosyaları sıkıştırıp tekrar deneyin.",
	"vars": [
		"limitFileSize"
	]
};
Language.notifications.reconnecting = {
	"message": "Yeniden bağlanılıyor"
};
Language.notifications.retry = {
	"message": "Yeniden dene"
};


Language.overlay = Language.overlay || {};

Language.overlay.cookiesOff = {
	"message": "Çerez fonksiyoları kapalı olduğu için bu sohbeti kullanamazsınız. Lütfen açık duruma getirin ve tarayıcınızı yenileyin."
};
Language.overlay.inactive = {
	"message": "Sohbeti tekrar başlatmak için buraya tıklayın"
};
Language.overlay.maintenance = {
	"message": "Sohbet sistemi bakımda"
};
Language.overlay.tawkContent = {
	"message": "tawk.to tarafından sağlanan bu araç, size siteniz üzerindeki ziyaretçileri görüntülemenizi ve onlarla bağlantı kurmanızı sağlayan ücretsiz bir mesajlaşma uygulamasıdır."
};


Language.rollover = Language.rollover || {};

Language.rollover.back = {
	"message": "Geri"
};
Language.rollover.chatMenu = {
	"message": "Menü"
};
Language.rollover.emailTranscriptOption = {
	"message": "Transkripti e-postala"
};
Language.rollover.end = {
	"message": "Sohbeti Bitir"
};
Language.rollover.knowledgeBase = {
	"message": "Bilgi Tabanı"
};
Language.rollover.maximize = {
	"message": "Büyült"
};
Language.rollover.minimize = {
	"message": "Küçült"
};
Language.rollover.negativeRating = {
	"message": "Bu diyalogu -1 puan ile değerlendirin"
};
Language.rollover.popOut = {
	"message": "Yeni pencere"
};
Language.rollover.positiveRating = {
	"message": "Bu diyalogu +1 puan ile değerlendirin"
};
Language.rollover.rateChat = {
	"message": "Bu sohbeti değerlendirin"
};
Language.rollover.resendMessage = {
	"message": "Mesajı tekrar gönder"
};
Language.rollover.resize = {
	"message": "Yeniden boyutlandır"
};
Language.rollover.screenShare = {
	"message": "Ekran Paylaşma"
};
Language.rollover.uploadFile = {
	"message": "Dosya Yükle"
};
Language.rollover.videoCall = {
	"message": "Görüntülü Arama"
};
Language.rollover.voiceCall = {
	"message": "Sesli Arama"
};


Language.routes = Language.routes || {};

Language.routes.all_agents = {
	"message": "Tüm Temsilciler"
};
Language.routes.conversations = {
	"message": "Konuşmalar"
};
Language.routes.load_more = {
	"message": "Daha Fazla Yükle"
};


Language.status = Language.status || {};

Language.status.away = {
	"message": "Dışarıda"
};
Language.status.offline = {
	"message": "Çevrimdışı"
};
Language.status.online = {
	"message": "Çevrimiçi"
};




Language.chat = Language.chat || {};

Language.chat.hours = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num saat",
		"other": "#num saat"
	}
};
Language.chat.messageQueuedText = {
	"pluralVars": [
		"t"
	],
	"message": {
		"one": "Tahmini bekleme süresi #strongStart #t dakika #strongEnd",
		"other": "Tahmini bekleme süresi #strongStart #t dakika #strongEnd"
	},
	"vars": [
		"strongStart",
		"strongEnd"
	]
};
Language.chat.minutes = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num dakika",
		"other": "#num dakika"
	}
};
Language.chat.newMessage = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num yeni mesaj",
		"other": "#num yeni mesaj"
	}
};
Language.chat.seconds = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num saniye",
		"other": "#num saniye"
	}
};


global.$_Tawk.language = Language;})(window);