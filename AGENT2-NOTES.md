# Agent2 Notes

## Summary
Hardened Decap CMS configuration to match the PMD Mayfair-style workflow and Git-backed editing model.

## What Changed
- Updated `public/admin/config.yml` to:
  - use `git-gateway` backend
  - target repo `0333PMD/2325Himount-Website`
  - keep `publish_mode: editorial_workflow`
  - include `squash_merges: true`
- Added property-manager-friendly structured collections:
  - Global settings (`content/site.yaml`)
  - Unit types (`content/units.yaml`)
  - Key pages (`content/pages/*.md`)
  - Gallery (`content/gallery.yaml`)
- Added field hints and validation (notably phone format).

## Operational Notes
- Netlify Identity + Git Gateway should remain enabled for editor auth.
- This config assumes CMS-only hosting path at `/admin` and Git as source of truth.
