"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, ChevronDown, ChevronUp, Trash2 } from "lucide-react";

interface Note {
  _id?: string;
  content: string;
  createdAt: string;
}

export default function NotesPanel({
  leadId,
  initialNotes,
}: {
  leadId: string;
  initialNotes: Note[];
}) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handleAddNote(e: React.FormEvent) {
    e.preventDefault();
    if (!newNote.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/leads/${leadId}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newNote.trim() }),
      });
      if (!res.ok) throw new Error("Failed to add note");
      const data = await res.json();
      setNotes(data.lead.notes);
      setNewNote("");
      setNotesOpen(true);
      toast.success("Note added");
    } catch {
      toast.error("Failed to add note");
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteNote(noteId: string) {
    setDeletingId(noteId);
    try {
      const res = await fetch(`/api/admin/leads/${leadId}/notes`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ noteId }),
      });
      if (!res.ok) throw new Error("Failed to delete note");
      const data = await res.json();
      setNotes(data.lead.notes);
      toast.success("Note deleted");
    } catch {
      toast.error("Failed to delete note");
    } finally {
      setDeletingId(null);
    }
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleString("en-IN", {
      day: "numeric", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  }

  return (
    <div className="bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="font-serif text-xl text-navy dark:text-white font-semibold mb-5">Notes</h3>

      <form onSubmit={handleAddNote} className="mb-6">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          rows={3}
          placeholder="Add a note about this lead..."
          className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-navy dark:text-gray-100 text-sm focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={loading || !newNote.trim()}
            className="flex items-center gap-2 bg-navy dark:bg-gray-700 text-cream px-4 py-2 text-sm font-semibold hover:opacity-90 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={14} />
            {loading ? "Adding..." : "Add Note"}
          </button>
        </div>
      </form>

      {notes.length > 0 && (
        <div>
          <button
            onClick={() => setNotesOpen(!notesOpen)}
            className="flex items-center gap-2 text-sm font-semibold text-navy/60 dark:text-gray-400 hover:text-navy dark:hover:text-white transition-colors w-full py-2 border-t border-gray-100 dark:border-gray-700"
          >
            {notesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {notes.length} {notes.length === 1 ? "note" : "notes"}
          </button>

          {notesOpen && (
            <div className="mt-3 space-y-3">
              {[...notes].reverse().map((note, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 p-4 rounded group relative">
                  <button
                    onClick={() => note._id && handleDeleteNote(note._id)}
                    disabled={deletingId === note._id}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-50"
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                  <p className="text-navy dark:text-gray-200 text-sm leading-relaxed pr-6">{note.content}</p>
                  <p className="text-navy/40 dark:text-gray-500 text-xs mt-2">{formatDate(note.createdAt)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {notes.length === 0 && (
        <p className="text-navy/40 dark:text-gray-500 text-sm border-t border-gray-100 dark:border-gray-700 pt-4">No notes yet.</p>
      )}
    </div>
  );
}
