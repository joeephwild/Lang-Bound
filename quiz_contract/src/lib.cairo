%lang starknet

@contract_interface
namespace IQuizContract {
    func submit_answer(user: felt, question_id: felt, answer: felt) -> (result: felt) {
    }
    func check_score(user: felt) -> (score: felt) {
    }
}

struct Answer {
    question_id: felt,
    answer: felt
}

@storage_var
func questions(question_id: felt) -> (answer: felt) {
}

@storage_var
func user_scores(user: felt) -> (score: felt) {
}

@view
func get_correct_answer{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(question_id: felt) -> (answer: felt) {
    return questions.read(question_id)
}

@external
func submit_answer{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(user: felt, question_id: felt, answer: felt) -> (result: felt) {
    let (correct_answer) = questions.read(question_id)
    if answer == correct_answer {
        let (score) = user_scores.read(user)
        user_scores.write(user, score + 1)
        return (1)
    } else {
        return (0)
    }
}

@view
func check_score{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(user: felt) -> (score: felt) {
    return user_scores.read(user)
}

@external
func add_question{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(question_id: felt, answer: felt) {
    questions.write(question_id, answer)
}
