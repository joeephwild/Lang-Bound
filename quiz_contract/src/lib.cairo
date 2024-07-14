use starknet::ContractAddress;

#[starknet::interface]
trait IQuiz<TContractState> {
    fn get_question (ref self: TContractState, question_id: felt252)
    fn get_answers (self: TContractState, question_id: felt252)
    fn get_score (self: TContractState, address: felt252)
}

#[starknet::contract]
mod quiz_contract {use starknet::{ContractAddress, get_caller_address, storage_access::StorageBaseAddress};
    #[storage]
    struct Storage {
        quizzes: LegacyMap::<u32, Quiz>,
        total_quizzes: u32
    }
    
    struct Quiz {
        title: felt252,
        description: felt252,                  
        questions: LegacyMap::<Question, u32>,   
        participants: LegacyMap::<ContractAddress, Participant>, 
        total_questions: u32,                    
        total_participants: u32,                
        creator: ContractAddress          
    }

    struct Question {
        text: felt252,
        options: LegacyMap::<u8, felt252>,
        correct_option: u8
        answers: LegacyMap::<ContractAddress, Answer>
        is_answered: bool
    }

    struct Answer {
        selected_option: u8,
        is_correct: bool
    }

    struct Participant {
        name: felt252,
        score: u32
    }
    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        StoredQuestion: StoredQuestion
    }
}

