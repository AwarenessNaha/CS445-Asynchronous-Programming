/**
 *Since I have looked at the solution, so provide another version of problem that
 *  has the same solution idea. 
 */

class MIUSA { //MIUSA stands for MIU Student activity
    students = {};

    register(student, activity) {
        if (!this.students[student]) {
            this.studentss[student] = [activity];
        } else {
            this.students[student].push(activity);
        }
    }

    notify(student, message) {
        if (this.students[student]) {
            this.students[student].forEach(fn => fn(message));
        }
    }

    cancelAnimationFrame(student, activity) {
        this.students[student] = this.students.filter(act => act !== activity);
    }
}
const miuSA = new MIUSA();
miuSA.register('Naha', console.log);
miuSA.register('Maharishi', console.log);

function deepTalk(msg) {
    console.log('deepTalk: ' + msg);
}
miuSA.register('Maharishi', deepTalk);
miuSA.register('Naha', deepTalk);
miuSA.register('Maharishi', deepTalk);

miuSA.notify("Naha", 'deeptTlak tonight 7:30PM');
miuSA.notify('Maharishi', 'deeptTlak tonight 7:30PM, you are one guest speaker!');
