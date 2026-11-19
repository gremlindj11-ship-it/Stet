# Stet

Suggest, then confirm. A prototype that reads a short consultation note and suggests which boxes to tick on the WHO Emergency Medical Team minimum data set (MDS) daily report. Nothing counts until a person confirms it. It also contains a small study rig for measuring how far clinicians agree when they code the same cases, with and without suggestions.

**Prototype. Synthetic cases only. Not a clinical tool. Do not enter real patient information.**

"Stet" is the proofreader's mark for "let it stand".

## Use it

Open the page once with a connection. After that it works with no signal, and on a phone you can add it to the home screen.

- Suggestions come from rules that run on the device. No AI and no network are needed.
- **It asks the deciding question.** Where the form's definitions turn on one fact the note does not give (how an injury was treated, or which of several major injuries drives care), it asks for that fact instead of guessing.
- **It logs what the definitions do not cover.** If no answer fits, tap Neither. The case is saved as a definition gap and listed on the Report tab.
- **It shows its reading.** The words it read are underlined in the note. Tap a word to see which row it fed.
- **A second suggester has to quote the note.** Inside the Claude app there is an optional Ask Claude button. A suggestion from the model is shown only if the words it quotes are in the note and are not negated ("no fever"). Where the model and the rules both speak, the row says whether they agree.
- **"Other" is broken down.** Recent responses report most patients under "Other diagnosis". Stet keeps what kind (hypertension, diabetes, joint pain and so on) on the device's own tally, and tells you when one kind is common enough for the coordination cell to name items 19 to 22 after it. The WHO form still counts it as Other.
- **Before you send.** The Report tab lists what is missing (no outcome, no relation, blank team details) before the day goes out.
- **Paper and pooling.** Print the day's tally. Save the day as a file and add it on another phone, so a team can collate with no internet and no email.
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

## Where the ideas came from

- The deciding question comes from the "next discriminating question" in [Triage](https://github.com/gremlindj11-ship-it/Triage), and so does the negation check.
- The quote rule comes from [Rind](https://github.com/gremlindj11-ship-it/Rind): no claim without the words it rests on.

## How it was made

The code was written by an AI assistant (Claude) under Sofia Vidal's direction. The form items and injury definitions follow the WHO daily reporting form marked Ver 2019 WHO.

## Licence

Copyright © 2026 Sofia Vidal. Released under the GNU Affero General Public License v3.0 (see [LICENSE](LICENSE)). You can use, change and share it, as long as anything you build from it stays open under the same licence, including when it runs as a web service. The WHO form items and definitions quoted in the app are WHO's wording, not covered by this licence.

## Contact

Sofia Vidal, via GitHub issues on this repository.
