import { GetNoteByIdPipe } from './get-note-by-id.pipe';

describe('GetNoteByIdPipe', () => {
  it('create an instance', () => {
    const pipe = new GetNoteByIdPipe();
    expect(pipe).toBeTruthy();
  });
});
