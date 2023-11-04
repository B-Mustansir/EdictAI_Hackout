import torch
from aksharamukha import transliterate

model, example_text = torch.hub.load(repo_or_dir='snakers4/silero-models',
                                     model='silero_tts',
                                     language='indic',
                                     speaker='v3_indic')

orig_text = "ప్రధాన మంత్రి శ్రీ నరేంద్ర మోదీ 2023 అక్టోబరు 1 వ తేదీ నాడు తెలంగాణ ను సందర్శించనున్నారు. మధ్యాహ్నం పూట దాదాపు గా 2 గంటల 15 నిమిషాల కు, ప్రధాన మంత్రి మహబూబ్ నగర్ జిల్లా కు చేరుకొంటారు. అక్కడ ఆయన రహదారులు, రైలు మార్గాలు, పెట్రోలియమ్, సహజ వాయువు మరియు ఉన్నత విద్య ల వంటి ముఖ్య రంగాల లో 13,500 కోట్ల రూపాయల కు పైగా విలువ కలిగిన అనేక అభివృద్ధి ప్రాజెక్టుల కు శంకుస్థాపన చేయడం తో పాటుగా వాటిని దేశ ప్రజల కు అంకితం కూడా చేస్తారు. కార్యక్రమం లో ప్రధాన మంత్రి వీడియో కాన్ఫరెన్సింగ్ మాధ్యం ద్వారా ఒక రైలు సర్వీసు కు కూడా ప్రారంభ సూచక ఆకుపచ్చటి జెండా ను చూపి ఆ రైలు ప్రయాణాన్ని మొదలుపెట్టడాన్ని తిలకిస్తారు."

roman_text = transliterate.process('autodetect', 'ISO', orig_text)
print(roman_text)

audio = model.apply_tts(roman_text,
                        speaker='hindi_male')