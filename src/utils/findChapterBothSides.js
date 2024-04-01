export default function findChapterBothSides(chapters, chapterCurrent) {
  if (chapters) {
    const index = chapters.findIndex(chapter => chapter.id === +chapterCurrent)
    if (index === -1) return chapterCurrent

    const previousChapter = index < chapters.length - 1 ? chapters[index + 1].id : null
    const nextChapter = index > 0 ? chapters[index - 1].id : null
    return { previousChapter, nextChapter }
  }
  return { previousChapter: null, nextChapter: null }
}
