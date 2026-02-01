# OwnerRez Integration Quickstart

This site uses the OwnerRez widget embed flow for availability, reviews, and booking.

## 1) Include the OwnerRez widget script

The site already loads the OwnerRez widget script inside `OwnerRezWidget` in `src/App.tsx`.

## 2) Add widgets (availability, reviews, booking)

Each widget is rendered by passing the OwnerRez `propertyId`, `widgetType`, and `widgetId`.
See `ownerRezWidgets` in `src/App.tsx` for the configured IDs.

## 3) Pre-fill booking dates + guests

On the marketing site, collect `check-in`, `check-out`, and `guests`, then redirect to:

```
/book?checkin=YYYY-MM-DD&checkout=YYYY-MM-DD&guests=4
```

The booking page should pass these values into the OwnerRez widget. Keep the widget as a direct embed (avoid nested iframes) so URL params are read correctly.

## 4) Production checklist

- Update widget IDs from the OwnerRez dashboard (production account)
- Confirm the `/book` page is using the production `propertyId`
- Test bookings in the OwnerRez sandbox before going live

## 5) Optional API integration

If you want custom pricing/availability beyond widgets, use OwnerRez API tokens for a single account or OAuth apps for multi-account access. Keep API keys server-side.
