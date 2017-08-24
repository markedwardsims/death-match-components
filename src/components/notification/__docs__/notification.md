---
name: Notification
css: dist/components/notification/notification.css
js: dist/components/notification/notification.js
---

## Notification

Notifications are used to inform the user on when something has happened. We have notifications 
for warning, error, success, and of course Chuck. 

    @example
    <div class="dm-notification-list">
        <div class="dm-notification-list__item dm-notification-list__item--warning dm-notification-list__item--visible">Take it easy!</div>
        <div class="dm-notification-list__item dm-notification-list__item--error dm-notification-list__item--visible">Error!</div>
		<div class="dm-notification-list__item dm-notification-list__item--success dm-notification-list__item--visible">Great success!</div>
		<div class="dm-notification-list__item dm-notification-list__item--chuck dm-notification-list__item--visible">Chuck always wins!</div>
    </div>
    
    <script>
        console.log('hello world!');
    </script>
    