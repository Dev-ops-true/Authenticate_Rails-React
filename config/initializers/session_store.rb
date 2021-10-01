if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_authentication_app", domain: "whatever-site-you-are-going-to-host-this-on.com"
else
  Rails.application.config.session_store :cookie_store, key: "_authentication_app"
end