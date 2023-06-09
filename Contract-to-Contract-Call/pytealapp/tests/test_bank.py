import pytest
from python_classes import *
from .update_contracts import *

@pytest.fixture
def bank():
    # setup
    # account codes cannot be hardcoded
    algorand_account = ["X6PHUOKGSF3GFMYTLCGQML7A33IIOWLOQIAXTGSEIF73CGQO4TEX7VLWHQ", "2OYMNMDMFGDJL3BXDCLMVWKNKFKD4YMDYJ6AIKHPYZNZNHRRGVX7BEAHT4"]
    p1 = Person("Vasil", algorand_account)
    p1.addRole("investor", Investor(p1))
    investor = p1.getRole("investor")
    investor.create_bank("Commerzbank")
    bank = investor.get_bank()

    yield bank
    # teardown
    if bank.deposit != None:
        bank.destroy("deposit")
    if bank.withdraw != None:
        bank.destroy("withdraw")
    if bank.transfer != None:
        bank.destroy("transfer")
    if bank.reference != None:
        bank.destroy("reference")
    investor.delete_bank()

def test_create(bank):
    assert bank.create("deposit") and bank.deposit != None

def test_create_fail1(bank):
    # if the bank tries to create 2 times the same functionality - it should fail
    bank.create("withdraw")
    assert bank.create("withdraw") == False

def test_create_fail2(bank):
    # the only inputs that bank.create(...) recognizes are: "deposit", "withdraw", "transfer", "reference"
    # "loan" should fail
    assert bank.create("loan") == False

def test_update(bank):
    bank.create("transfer")
    assert bank.update("transfer", transfer_approval, transfer_clear)

def test_update_fail(bank):
    # if the bank tries to update a functionality that is still not implemented - it should fail
    assert bank.update("transfer", transfer_approval, transfer_clear) == False

def test_destroy_fail(bank):
    # if the bank tries to delete a functionality that is still not implemented - it should fail
    assert bank.destroy("deposit") == False






