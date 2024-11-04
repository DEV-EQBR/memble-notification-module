class FcmBuilderService {
  androidFcmObjectBuilder() {
    return {
      androidFcmObject: {},

      setCollapseKey(collapseKey) {
        this.androidFcmObject.collapse_key = collapseKey;
        return this;
      },

      setPriority(priority) {
        this.androidFcmObject.priority = priority;
        return this;
      },

      setTtl(ttl) {
        this.androidFcmObject.ttl = ttl;
        return this;
      },

      setRestrictedPackageName(restrictedPackageName) {
        this.androidFcmObject.restricted_package_name = restrictedPackageName;
        return this;
      },

      setData(data) {
        this.androidFcmObject.data = data;
        return this;
      },

      setNotification(notification) {
        this.androidFcmObject.notification = notification;
        return this;
      },

      setFcmOptions(fcmOptions) {
        this.androidFcmObject.fcmOptions = fcmOptions;
        return this;
      },

      setDirectBootOk(directBootOk) {
        this.androidFcmObject.direct_boot_ok = directBootOk;
        return this;
      },

      setDefaultOption() {
        this.androidFcmObject.priority = 'high';
        return this;
      },

      build() {
        return this.androidFcmObject;
      },
    };
  }

  androidNotificationObjectBuilder() {
    return {
      notification: {},

      setTitle(title) {
        this.notification.title = title;
        return this;
      },

      setBody(body) {
        this.notification.body = body;
        return this;
      },

      setIcon(icon) {
        this.notification.icon = icon;
        return this;
      },

      setColor(color) {
        this.notification.color = color;
        return this;
      },

      setSound(sound) {
        if (!sound) return this;
        this.notification.sound = sound;
        return this;
      },

      setTag(tag) {
        if (!tag) return this;
        this.notification.tag = `channel_${tag.split('/')[5]}`;
        return this;
      },

      setClickAction(clickAction) {
        if (!clickAction) return this;
        this.notification.click_action = clickAction;
        return this;
      },

      setBodyLocKey(bodyLocKey) {
        this.notification.body_loc_key = bodyLocKey;
        return this;
      },

      setBodyLocArgs(bodyLocArgs) {
        this.notification.body_loc_args = bodyLocArgs;
        return this;
      },

      setTitleLocKey(titleLocKey) {
        this.notification.title_loc_key = titleLocKey;
        return this;
      },

      setTitleLocArgs(titleLocArgs) {
        this.notification.title_loc_args = titleLocArgs;
        return this;
      },

      setChannelId(channelId) {
        this.notification.channel_id = channelId;
        return this;
      },

      setTicker(ticker) {
        this.notification.ticker = ticker;
        return this;
      },

      setSticky(sticky) {
        this.notification.sticky = sticky;
        return this;
      },

      setEventTime(eventTime) {
        this.notification.event_time = eventTime;
        return this;
      },

      setLocalOnly(localOnly) {
        this.notification.local_only = localOnly;
        return this;
      },

      setNotificationPriority(notificationPriority) {
        this.notification.notification_priority = notificationPriority;
        return this;
      },

      setDefaultSound(defaultSound) {
        this.notification.default_sound = defaultSound;
        return this;
      },

      setDefaultVibrateTimings(defaultVibrateTimings) {
        this.notification.default_vibrate_timings = defaultVibrateTimings;
        return this;
      },

      setDefaultLightSettings(defaultLightSettings) {
        this.notification.default_light_settings = defaultLightSettings;
        return this;
      },

      setVibrateTimings(vibrateTimings) {
        this.notification.vibrate_timings = vibrateTimings;
        return this;
      },

      setVisibility(visibility) {
        this.notification.visibility = visibility;
        return this;
      },

      setNotificationCount(notificationCount) {
        this.notification.notification_count = notificationCount;
        return this;
      },

      setLightSettings(lightSettings) {
        this.notification.light_settings = lightSettings;
        return this;
      },

      setImage(image) {
        if (!image) return this;
        this.notification.image = image;
        return this;
      },

      setContent(title, body) {
        this.notification.title = title;
        this.notification.body = body;
        return this;
      },

      setDefaultOption() {
        this.notification.sound = 'default';
        this.notification.local_only = false;
        this.notification.notification_priority = 'PRIORITY_DEFAULT';
        this.notification.visibility = 'PRIVATE';
        return this;
      },

      build() {
        return this.notification;
      },
    };
  }

  apnsFcmObjectBuilder() {
    return {
      apns: {},

      setApnsHeaders(headers) {
        this.apns.headers = headers;
        return this;
      },

      setApnsPayload(payload) {
        this.apns.payload = payload;
        return this;
      },

      setApnsFcmOptions(fcmOptions) {
        this.apns.fcm_options = fcmOptions;
        return this;
      },

      build() {
        return this.apns;
      },
    };
  }

  apnsHeaderObjectBuilder() {
    return {
      headers: {},

      setAuthorization(authorization) {
        this.headers.authorization = authorization;
        return this;
      },

      setApnsPushType(apnsPushType) {
        this.headers['apns-push-type'] = apnsPushType;
        return this;
      },

      setId(id) {
        this.headers.id = id;
        return this;
      },

      setApnsExpiration(apnsExpiration) {
        this.headers['apns-expiration'] = apnsExpiration;
        return this;
      },

      setApnsPriority(apnsPriority) {
        this.headers['apns-priority'] = apnsPriority;
        return this;
      },

      setApnsTopic(apnsTopic) {
        this.headers['apns-topic'] = apnsTopic;
        return this;
      },

      setApnsCollapseId(apnsCollapseId) {
        this.headers['apns-collapse-id'] = apnsCollapseId;
        return this;
      },

      setDefaultOption() {
        this.headers['apns-priority'] = '10';
        return this;
      },

      build() {
        return this.headers;
      },
    };
  }

  apnsPayloadObjectBuilder() {
    return {
      payload: {
        aps: {},
      },

      setAlert(alert) {
        this.payload.aps.alert = alert;
        return this;
      },

      setSubtitle(subtitle) {
        if (!subtitle) return this;
        this.payload.aps.alert.subtitle = subtitle;
        return this;
      },

      setBadge(badge) {
        this.payload.aps.badge = badge;
        return this;
      },

      setSound(sound) {
        if (!sound) return this;
        this.payload.aps.sound = sound;
        return this;
      },

      setCriticalSound(sound) {
        this.payload.aps.sound = sound;
        return this;
      },

      setThreadId(threadId) {
        if (!threadId) return this;
        this.payload.aps['thread-id'] = threadId;
        return this;
      },

      setCategory(category) {
        if (!category) return this;
        this.payload.aps.category = category;
        return this;
      },

      setContentAvailable(contentAvailable) {
        this.payload.aps['content-available'] = contentAvailable;
        return this;
      },

      setMutableContent(mutableContent) {
        this.payload.aps['mutable-content'] = mutableContent;
        return this;
      },

      setTargetContentId(targetContentId) {
        this.payload.aps['target-content-id'] = targetContentId;
        return this;
      },

      setInterruptionLevel(interruptionLevel) {
        this.payload.aps.interruptionLevel = interruptionLevel;
        return this;
      },

      setRelevanceScore(relevanceScore) {
        this.payload.aps['relevance-score'] = relevanceScore;
        return this;
      },

      setFilterCriteria(filterCriteria) {
        this.payload.aps['filter-criteria'] = filterCriteria;
        return this;
      },

      build() {
        return this.payload;
      },
    };
  }

  apnsFcmOptionsObjectBuilder() {
    return {
      fcm_options: {},

      setImage(image) {
        this.fcm_options.image = image;
        return this;
      },

      setAnalyticsLevel(analyticsLevel) {
        this.fcm_options.analytics_level = analyticsLevel;
        return this;
      },

      build() {
        return this.fcm_options;
      },
    };
  }

  webPushFcmObjectBuilder() {
    return {
      webpush: {},

      setHeaders(headers) {
        this.webpush.headers = headers;
        return this;
      },

      setData(data) {
        this.webpush.data = data;
        return this;
      },

      setNotification(notification) {
        this.webpush.notification = notification;
        return this;
      },

      setFcmOptions(fcmOptions) {
        this.webpush.fcm_options = fcmOptions;
        return this;
      },

      build() {
        return this.webpush;
      },
    };
  }

  webPushNotificationObjectBuilder() {
    return {
      notification: {},

      setActions(actions) {
        this.notification.actions = actions;
        return this;
      },

      setBadge(badge) {
        this.notification.badge = badge;
        return this;
      },

      setBody(body) {
        this.notification.body = body;
        return this;
      },

      setData(data) {
        this.notification.data = data;
        return this;
      },

      setDir(dir) {
        this.notification.dir = dir;
        return this;
      },

      setLang(lang) {
        this.notification.lang = lang;
        return this;
      },

      setTag(tag) {
        this.notification.tag = tag;
        return this;
      },

      setIcon(icon) {
        this.notification.icon = icon;
        return this;
      },

      setImage(image) {
        this.notification.image = image;
        return this;
      },

      setRenotify(renotify) {
        this.notification.renotify = renotify;
        return this;
      },

      setRequireInteraction(requireInteraction) {
        this.notification.requireInteraction = requireInteraction;
        return this;
      },

      setSilent(silent) {
        this.notification.silent = silent;
        return this;
      },

      setTimestamp(timestamp) {
        this.notification.timestamp = timestamp;
        return this;
      },

      setTitle(title) {
        this.notification.title = title;
        return this;
      },

      setVibrate(vibrate) {
        this.notification.vibrate = vibrate;
        return this;
      },

      build() {
        return this.notification;
      },
    };
  }

  fcmObjectBuilder() {
    return {
      fcmObject: {},

      setName(name) {
        this.fcmObject.name = name;
        return this;
      },

      setData(data) {
        this.fcmObject.data = data;
        return this;
      },

      setNotification(notification) {
        this.fcmObject.notification = notification;
        return this;
      },

      setAndroid(android) {
        this.fcmObject.android = android;
        return this;
      },

      setWebPush(webPush) {
        this.fcmObject.webpush = webPush;
        return this;
      },

      setApns(apns) {
        this.fcmObject.apns = apns;
        return this;
      },

      setFcmOptions(fcmOptions) {
        this.fcmObject.fcm_options = fcmOptions;
        return this;
      },

      setTarget(target, targetIdentifier = 'token') {
        switch (targetIdentifier) {
          case 'token':
            this.fcmObject.token = target;
            break;
          case 'topic':
            this.fcmObject.topic = target;
            break;
          default:
            break;
        }
        return this;
      },

      build() {
        return this.fcmObject;
      },
    };
  }
}

module.exports = FcmBuilderService;
