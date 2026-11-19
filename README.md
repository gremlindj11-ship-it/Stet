# Stet

Suggest, then confirm. A prototype that reads a short consultation note and suggests which boxes to tick on the WHO Emergency Medical Team minimum data set (MDS) daily report. Nothing counts until a person confirms it. It also contains a small study rig for measuring how far clinicians agree when they code the same cases, with and without suggestions.

**Prototype. Synthetic cases only. Not a clinical tool. Do not enter real patient information.**

"Stet" is the proofreader's mark for "let it stand".

## Use it

Open the page once with a connection. After that it works with no signal, and on a phone you can add it to the home screen.

- Suggestions come from rules that run on the device. No AI and no network are needed.
- When an injury could be minor or moderate, it asks how it was treated. If neither answer fits, the definitions do not cover the case and you choose yourself.
- The words it read are underlined in the note. Tap a word to see which row it fed.
- Report tab: daily tally and exports, including two files in the column layout of MDS Maker Ver 2019WHO_2.02. These have not been tried against a coordination cell's import.
- Study tab: 12 placeholder cases, half with suggestions and half without, agreement by Randolph's free-marginal kappa. Modelled on Jafar, Sergeant and Lecky, Emerg Med J 2020;37:58. The cases here are placeholders, not the published ones.

## What it is not

- Not validated. No real raters have used it.
- Not a medical record. The UK EMT record is paper by design.
- The rules are English only.

## Files

- `index.html`: the whole app, one file.
- `sw.js`: saves the page for use with no signal. Change `VERSION` in it whenever `index.html` changes, or phones keep the old copy.
- `manifest.webmanifest`, `icon*.png`, `icon.svg`: lets a phone install it.

## How it was made

The code was written by an AI assistant (Claude) under Sofia Vidal's direction. The form items and injury definitions follow the WHO daily reporting form marked Ver 2019 WHO.

## Contact

Sofia Vidal, via GitHub issues on this repository.
