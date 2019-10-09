export function chordScales(name: string): string[] {
  const s = chord(name)
  const isChordIncluded = isSupersetOf(s.chroma)
  return scaleTypes()
    .filter(scale => isChordIncluded(scale.chroma))
    .map(scale => scale.name)
}
